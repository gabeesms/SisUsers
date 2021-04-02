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

1. Menu Lateral com opção de usuário, ao clicar é exibido a lista de usuários.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem1.JPG)

2. Botão novo usuário e é exibido a tela de formulário de novo usuário.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem2.JPG)

3. Botão cancelar e redireciona para a lista de usuários.

4. Botão salvar usuário, e ao salvar usuário e redirecionado para a lista de usuários.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem3.JPG)

5. Botão de ação na tabela editar usuário e redirecionado para tela de usuário formulário editar.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem4.JPG)


6. Botão cancelar e redirecionado para a lista de usuários.

7. Botão alterar, e ao alterar é redirecionado para a lista de usuários.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem5.JPG)

8. Botão remover usuário, e ao clicar é exibido um diálogo.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem6.JPG)

9. Diálogo remover usuário com botão opção NÃO, e ao clicar é redirecionado para a lista de usuários.

10. Diálogo remover usuário com o botão opção SIM, e ao clicar é removido o usuário e redirecionado para a lista de usuários com a tabela atualizada.

![](https://raw.githubusercontent.com/gabeesms/SisUsers/Feature/Gabrielle/imagens/Interface/Imagem7.JPG)



