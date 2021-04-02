<template >
  <v-app>
    <g-loading title="Carregando" :dialog="dialogLoading"></g-loading>
    <g-dialog
      @fecharDialog="fecharDialogMessage"
      :dialog="dialogMessage"
      :title="title"
      :text="textError"
    ></g-dialog>

    <g-snackbar
      @fecharSnackbar="fecharSnackbar"
      :snackbar="snackbar"
      :color="color"
      :text="textError"
    ></g-snackbar>

    <router-view @showSnackbar="showSnackbar" @showLoading="loading" @showMessage="showMsg"></router-view>
    <br />
    <!-- <k-footer></k-footer> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import GLoading from "@/components/Loading.vue";
import GDialog from "@/components/Dialog.vue";
import GSnackbar from "@/components/Snackbar.vue";

import { Storage, StorageEnum } from "./configuration/storage";

export default Vue.extend({
  name: "App",
  components: { GLoading, GDialog, GSnackbar },
  data: () => ({
    dialogLoading: false,
    dialogMessage: false,
    snackbar: false,
    color: "",
    title: "",
    textError: "",
  }),
  methods: {
    loading(visible: boolean): void {
      this.dialogLoading = visible;
    },

    fecharDialogMessage() {
      this.dialogMessage = false;
    },

    fecharSnackbar() {
      this.snackbar = false;
    },

    showSnackbar(msg: string, color: string = "red") {
      this.textError = msg.toString();
      this.color = color;
      this.snackbar = true;
    },

    showMsg(title: string, msg: string | Error): void {
      this.title = title;

      this.textError = msg.toString();
      this.dialogMessage = true;
    },
  },
  created() {
    
    if (!Storage.get(StorageEnum.Logado)) {
      Storage.salvar(StorageEnum.Logado, "false");
      Storage.salvar(StorageEnum.Login, "{}");
      this.$router.push("/");
    }
  },
});
</script>

<style >

.v-label{
  font-size: 18px !important;
  height: 30px !important; 
}

.v-list-item__title{
  font-size: 15px !important
}

/* .v-text-field__slot{
  height: 35px !important;
} */

/* .v-input input {
  max-height: 50px !important;
} */

.v-data-table th {
  color: rgba(255, 251, 251, 0.986) !important;
  background-color: var(--v-primary-base) !important;
  font-size: 13px !important;
}
</style>