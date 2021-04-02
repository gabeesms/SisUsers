<template>
  <v-container>
    <g-loading title="Carregando" :dialog="dialogLoading"></g-loading>
    <g-dialog
      :dialog="dialogMessagePergunta"
      title="Remover Usuário"
      text="O usuário selecionado será removido. Deseja continuar?"
    >
      <template v-slot:buttoes>
        <v-btn color="primary" width="100" text dark @click="naoPergunta"
          >Não</v-btn
        >
        <v-btn color="secondary" width="100" text dark @click="simPergunta"
          >Sim</v-btn
        >
      </template>
    </g-dialog>

    <v-row>
      <v-col cols="10" style="text-align: center;">
        <h3>
          <b>Lista e Cadastro de Usuários</b>
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10">
        <v-col cols="12" sm="1" style="float: right">
          <v-btn @click="novoUsuario" color="secondary" dark large>
            <v-icon left>
              mdi-file
            </v-icon>
            Novo Usuário
          </v-btn>
        </v-col>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <v-col cols="12" sm="3" style="float: left">
          <v-text-field
            label="Pesquisar Usuários"
            v-model="search"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <v-data-table
          :headers="headers"
          :items="itens"
          :search="search"
          class="elevation-1 classtable"
        >
          <template v-slot:item.telefone="{ item }">
            {{
              item.telefone.replace(/(\d{2})(\d{5})(\d{4})/, function(
                regex,
                arg1,
                arg2,
                arg3
              ) {
                return "(" + arg1 + ")" + arg2 + "-" + arg3;
              })
            }}
          </template>
          <template v-slot:item.logradouro="{ item }">
            {{
              item.logradouro +
                " Nº: " +
                item.numero +
                " - Bairro: " +
                item.bairro
            }}
          </template>
          <template v-slot:item.acoes="{ item }">
            <v-icon
              title="Editar Funcionário"
              color="primary"
              @click="update(item)"
              >mdi-pencil</v-icon
            >
            <v-icon
              title="Remover Funcionário"
              color="primary"
              @click="remove(item)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script
  lang="ts"
  src="../../controller/Cadastros/UsuarioController.ts"
></script>

<style>
.classtable.v-data-table th {
  color: #fff !important;
  background-color: #78909c !important;
  font: normal normal bold 18px/23px Helvetica;
}
</style>
