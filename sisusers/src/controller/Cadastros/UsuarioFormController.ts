import Vue from "vue";
import Component from "vue-class-component";

import { Resposta } from "@utils/Resposta";
import { IFactory } from "@/utils/IFactory";
import { MUsuario } from "@/models/MUsuario";

@Component({})
export default class UsuarioFormController extends Vue {
  mUsuario = new MUsuario();
  id = "";

  snackbar = false;
  text = "";
  vertical = true;
  color = "";
  colorBorder = "";

  maskCel = "(##)#####-####";
  maskCPF = "###.###.###-##";
  maskCEP = "#####-###";

  getDadosUsuario() {
    this.$emit("showLoading", true);
    IFactory.getUsuarioBaseClient().getPath(
      "/" + this.id,
      (resutl: Resposta) => {
        this.$emit("showLoading", false);
        this.mUsuario = resutl.entity;
      }
    );
  }

  consultaCEP() {
    let cep = this.mUsuario.cep;
    cep = cep.replace(/[^\d]+/g, "");

    let endereco : any = {}; 

    this.$emit("showLoading", true);
    IFactory.getUsuarioBaseClient().getBuscaCep(cep, (resutl: any) => {
      this.$emit("showLoading", false);
      endereco = resutl.entity; 
      this.mUsuario.logradouro = endereco.logradouro;
      this.mUsuario.bairro = endereco.bairro;
      this.mUsuario.localidade = endereco.localidade;
      this.mUsuario.uf = endereco.uf;
    });
   
  }

  salvar() {
    let telefone = this.mUsuario.telefone;
    telefone = telefone.replace(/[^\d]+/g, "");
    this.mUsuario.telefone = telefone;

    let cpf = this.mUsuario.cpf;
    cpf = cpf.replace(/[^\d]+/g, "");
    this.mUsuario.cpf = cpf;

    if (this.validate()) {
    } else {
      if (!this.id) {
        this.$emit("showLoading", true);
        IFactory.getUsuarioBaseClient().post(
          this.mUsuario,
          (result: Resposta) => {
            this.$emit("showLoading", false);
            if (result.resposta) {
              this.$emit("showSnackbar", result.informacao, "green");
              this.$router.push("/usuarios");
            } else {
              this.$emit("showSnackbar", result.informacao, "red");
            }
          }
        );
      } else {
        IFactory.getUsuarioBaseClient().putPath(
          "/" + this.id,
          this.mUsuario,
          (result: Resposta) => {
            this.$emit("showSnackbar", result.informacao, "green");
            this.$router.push("/usuarios");
          }
        );
      }
    }
  }

  retornaListaUsuarios() {
    this.$router.push("/usuarios");
  }

  validate() {
    if (this.mUsuario.nome == "" || this.mUsuario.nome.length > 100) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo nome está vazio ou inválido.";
      this.snackbar = true;
      return true;
    }
    if (this.mUsuario.cpf == "" || this.mUsuario.cpf.length > 13) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo CPF está vazio ou inválido.";
      this.snackbar = true;
      return true;
    } else if (
      this.mUsuario.cpf != "" ||
      this.mUsuario.cpf != null ||
      this.mUsuario.cpf != undefined
    ) {
      let cpf = this.mUsuario.cpf;
      cpf = cpf.replace(/[^\d]+/g, "");

      if (!this.validaCPF(cpf)) {
        this.colorBorder = "error";
        this.color = "error";
        this.text = "O CPF informado é inválido. Digite um CPF válido.";
        this.snackbar = true;
        return true;
      }
    }

    if (this.mUsuario.telefone == "" || this.mUsuario.telefone.length > 14) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo celular está vazio ou inválido.";
      this.snackbar = true;
      return true;
    }

    if (this.mUsuario.cep == "" || this.mUsuario.cep.length > 9) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo CEP está vazio ou inválido.";
      this.snackbar = true;
      return true;
    }

    if (this.mUsuario.numero == "" || this.mUsuario.numero.length > 5) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo número está vazio ou inválido.";
      this.snackbar = true;
      return true;
    }

    if (
      this.mUsuario.complemento == "" ||
      this.mUsuario.complemento.length > 50
    ) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo complemento está vazio ou inválido.";
      this.snackbar = true;
      return true;
    }

    if (this.mUsuario.email == "" || this.mUsuario.email.length > 50) {
      this.colorBorder = "error";
      this.color = "error";
      this.text = "O campo e-mail está vazio ou inválido.";
      this.snackbar = true;
      return true;
    }

    return false;
  }

  validaCPF(cpf: any): boolean {
    let numeros, digitos, soma, i, resultado, digitosIguais;
    digitosIguais = 1;
    if (cpf.length < 11) return false;
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitosIguais = 0;
        break;
      }
    if (!digitosIguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != digitos.charAt(0)) return false;
      numeros = cpf.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != digitos.charAt(1)) return false;
      return true;
    } else return false;
  }

  created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.getDadosUsuario();
    }
  }
}
