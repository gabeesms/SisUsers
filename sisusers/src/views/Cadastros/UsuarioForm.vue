<template>
  <v-container>
    <v-snackbar
      v-model="snackbar"
      :color="colorBorder"
      shaped
      timeout="3000"
      :vertical="vertical"
    >
      <b>{{ text }}</b>
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" @click="snackbar = false" icon dark small>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!-- <v-btn icon v-bind="attrs" @click="snackbar = false">mdi-magnify</v-btn> -->
      </template>
    </v-snackbar>
    <v-row ref="form">
      <v-col cols="12" v-if="!id">
        <h3>Adicione um novo departamento no sistema</h3>
      </v-col>
      <v-col cols="12" v-if="id">
        <h3>
          <b>Alterando dados do usuário no sistema</b>
        </h3>
      </v-col>
    </v-row>

    <v-col cols="12" sm="12">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Nome *"
            placeholder="Digite o Nome"
            v-model="mUsuario.nome"
            :rules="[
              () => (!!mUsuario.sigla && mUsuario.sigla.length <= 100) || '',
            ]"
            counter="100"
            maxlength="100"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="CPF *"
            placeholder="Digite o CPF"
            v-model="mUsuario.cpf"
            v-mask="maskCPF"
            :rules="[() => (!!mUsuario.cpf && mUsuario.cpf.length <= 14) || '']"
            required
            maxlength="14"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Celular *"
            placeholder="Digite o Celular"
            v-model="mUsuario.telefone"
            v-mask="maskCel"
            maxlength="14"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            label="CEP *"
            placeholder="Informe o CEP"
            v-model="mUsuario.cep"
            v-mask="maskCEP"
            maxlength="9"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-btn
            color="secondary"
            fab
            dark
            small
            title="Consulta de CEP (Correios Brasil)"
            @click="consultaCEP()"
          >
            <v-icon dark>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="5">
          <v-text-field
            label="Logradouro"
            placeholder="Digite o Logradouro"
            readonly
            v-model="mUsuario.logradouro"
            :rules="[
              () =>
                (!!mUsuario.logradouro && mUsuario.logradouro.length <= 100) ||
                '',
            ]"
            maxlength="100"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Número *"
            placeholder="Informe o Número"
            v-model="mUsuario.numero"
            maxlength="5"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Complemento"
            placeholder="Digite o Complemento"
            v-model="mUsuario.complemento"
            counter="50"
            maxlength="50"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Bairro"
            placeholder="Bairro"
            readonly
            v-model="mUsuario.bairro"
            maxlength="20"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Localidade"
            placeholder="Localidade"
            v-model="mUsuario.localidade"
            maxlength="50"
            required
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            label="UF"
            placeholder="UF"
            v-model="mUsuario.uf"
            maxlength="2"
            required
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="E-mail *"
            placeholder="Digite o E-mail"
            v-model="mUsuario.email"
            :rules="[
              () => (!!mUsuario.email && mUsuario.email.length <= 50) || '',
            ]"
            counter="50"
            maxlength="50"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          large
          dark
          width="150"
          depressed
          color="primary"
          @click="retornaListaUsuarios"
        >
          Cancelar
        </v-btn>

        <v-btn
          large
          dark
          width="150"
          @click="salvar"
          depressed
          color="secondary"
        >
          {{ !id ? "Salvar" : "Alterar" }}
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-container>
</template>

<script
  src="../../controller/Cadastros/UsuarioFormController.ts"
  lang="ts"
></script>
