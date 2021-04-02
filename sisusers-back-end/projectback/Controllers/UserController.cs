using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using projectback.Context;
using projectback.ModelsData;
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace projectback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DatabaseContext _context;
        private readonly IConfiguration _config;

        HttpClient consultaCEP;
        Uri enderecoUri;

        public UserController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        //RESPOSTAS DB
        public class Resposta
        {
            public string informacao { get; set; }

            public bool resposta { get; set; }
        }

        //MODEL CEP - CORREIOS
        public class EnderecoModel
        {
            public string cep { get; set; }
            public string logradouro { get; set; }
            public string complemento { get; set; }
            public string bairro { get; set; }
            public string localidade { get; set; }
            public string uf { get; set; }
            public string ibge { get; set; }
            public string gia { get; set; }
            public string ddd { get; set; }
            public string siafi { get; set; }
        }

        // GET/CEP
        [HttpGet("buscaCep/{codCep}")]
        public Task<EnderecoModel> GetConsultaCEPCorreios(string codCep)
        {
            return BuscaCep(codCep);
        }

        // GET/USER
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        // GET/USER/ID
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetUserId(long id)
        {
            var userDTO = await _context.User.FirstOrDefaultAsync(t => t.id == id);

            if (userDTO == null)
            {
                return NotFound();
            }

            return userDTO;
        }

        // PUT/USER
        [HttpPut("{id}")]
        public async Task<Resposta> PutUserDTO(long id, UserDTO userDTO)
        {
            var retorno = new Resposta();

            var user = _context.User.FirstOrDefault(t => t.id == id);

            if (id != user.id)
            {
                retorno.resposta = false;
                retorno.informacao = "Usuário não localizado.";
            }
            else
            {
                try
                {
                    user.bairro         = userDTO.bairro;
                    user.cep            = userDTO.cep;
                    user.complemento    = userDTO.complemento;
                    user.cpf            = userDTO.cpf;
                    user.email          = userDTO.email;
                    user.localidade     = userDTO.localidade;
                    user.logradouro     = userDTO.logradouro;
                    user.nome           = userDTO.nome;
                    user.numero         = userDTO.numero;
                    user.telefone       = userDTO.telefone;
                    user.uf             = userDTO.uf;
              
                    _context.Entry(user).State = EntityState.Modified;

                    await _context.SaveChangesAsync();
                    retorno.resposta = true;
                    retorno.informacao = "Dados do Usuário alterado com sucesso.";
                }
                catch (Exception e)
                {

                    retorno.resposta = false;
                    retorno.informacao = "Não foi possível alterar os dados do usuário. " + e;

                }
            }

            return retorno;
        }

        // POST/USER
        [HttpPost]
        public async Task<ActionResult<Resposta>> PostUserDTO(UserDTO userDTO)
        {
            var retorno = new Resposta();

            try
            {

                _context.User.Add(userDTO);

                await _context.SaveChangesAsync();

                retorno.resposta = true;
                retorno.informacao = "Dados do novo Usuário cadastrado com sucesso.";

            }
            catch (Exception e)
            {
                retorno.resposta = false;
                retorno.informacao = "Não foi possível cadastrar o novo usuário. " + e;
            }


            return retorno;

        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Resposta>> DeleteUserDTO(long id)
        {
            var retorno = new Resposta();

            var userDTO = await _context.User.FindAsync(id);
            if (userDTO == null)
            {
                return NotFound();
            }

            try
            {
                var data = _context.User.FirstOrDefault(t => t.id == id);

                _context.User.Remove(data);
                _context.SaveChanges();

                retorno.resposta = true;
                retorno.informacao = "Usuário Deletado com sucesso.";
            }
            catch
            {
                if (!UserDTOExists(id))
                {

                    retorno.resposta = false;
                    retorno.informacao = "Usuário não localizado.";
                }
                else
                {
                    throw;
                }
            }

            return retorno;
        }

        private bool UserDTOExists(long id)
        {
            return _context.User.Any(e => e.id == id);
        }

        private async Task<EnderecoModel> BuscaCep(string cep)
        {

            consultaCEP = new HttpClient();

            string conexao = _config.GetSection("CEP_CORREIOS:path").Value.ToString();

            consultaCEP.BaseAddress = new Uri(conexao);

            consultaCEP.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = consultaCEP.GetAsync(cep + "/json/").Result;

            if (response.IsSuccessStatusCode)
            {
                enderecoUri = response.Headers.Location;

                var enderecoJson = response.Content.ReadAsStringAsync();

                EnderecoModel enderecoModel = JsonConvert.DeserializeObject<EnderecoModel>(enderecoJson.Result);

                return enderecoModel;
            }
            else
            {
                return null;
            }

        }
    }
}
