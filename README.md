# SisUsers
## CRUD Usuários

##### Front-end: Framework Vuejs, Framework de componente Vuetify, Nodejs, JavaScript, TypeScript;
##### Back-end: C# com framework Entity;

---
#### Ferramentas utilizadas para desenvolver e executar a solução:
1. Front-end: Microsoft Visual Studio Code;
2. Back-end: Microsoft Visual Studio Community 2019;
3. Database: Microsoft SQL Server 2017;
---
#### Passo-a-passo para executar a solução:

1. Back-end:
	>1.1 Iniciar Microsoft Visual Studio e abrir a solução (projectback).

	>1.2 Nome da Pasta -> sisusers-back-end. 
2. Front-end:
	>2.1 Iniciar Microsoft Visual Studio Code.

	>2.2 Nome da Pasta -> sisusers.

	>2.3 Faça uma cópia do arquivo "env.example" e renomeie para ".env"

	> 2.4 Instalar as dependencias Nodejs
    
    ```
    npm install
    ```
    > 2.5 Inicializar o projeto
	
    ```
    npm run serve
    ```
3. Script Banco de dados
	> 3.1 Iniciar Microsoft SQL Server 2017;
	
    >3.2 Nome da pasta script-db e executar o script de criação do banco de dados(Script-SisUser-db);
---
Interface do Projeto

1. Menu Lateral com opção de Usuários, e ao clicar é exibido a lista de usuários.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem1.JPG)

2. Botão NOVO USUÁRIO é exibido a tela de cadastro usuário.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem2.JPG)

3. Botão CANCELAR redireciona para a lista de usuários.

4. Botão SALVAR persiste os dados e retorna para a lista de usuários.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/main/imagens/Interface/Imagem3.JPG)

5. Botão de ação EDITAR, realiza a chamada da tela de edição de dados.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem4.JPG)


6. Botão CANCELAR redireciona para a lista de usuários.

7. Botão ALTERAR edita os dados no banco de dados.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem5.JPG)

8. Botão de ação REMOVER é exibido um diálogo com botões de ação SIM | NÃO para exclusão do registro selecionado.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem6.JPG)

9. Diálogo Remover Usuário, ao clicar NÃO cancela a ação e retorna para a lista de usuários cadastrados.

10. Diálogo Remover Usuário, ao clicar SIM é excluído do banco de dados o registro selecionado. 

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem7.JPG)



