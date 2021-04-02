import Vue from "vue";
import Component from "vue-class-component";
import GLoading from "../../components/Loading.vue";
import GDialog from "../../components/Dialog.vue";

import { Resposta } from "@utils/Resposta";
import { IFactory } from "@/utils/IFactory";
import { MUsuario } from "@/models/MUsuario";

@Component({
  components: {
    GDialog,
    GLoading,
  },
})
export default class UsuarioController extends Vue {
  search = "";

  headers = [
    {
      text: "NOME",
      value: "nome",
      align: "left",
    },
    {
      text: "TELEFONE",
      value: "telefone",
      align: "left",
    },
    {
      text: "ENDEREÇO",
      value: "logradouro",
      align: "left",
    },
    {
      text: "AÇÕES",
      value: "acoes",
      align: "center",
    },
  ];
  itens = [];

  dialogLoading = false;

  dialogMessagePergunta = false;

  id = "";

  itemUserDelete: MUsuario | null = null

  getUsuario() {
    this.$emit("showLoading", true);
    IFactory.getUsuarioBaseClient().get((resutl: Resposta) => {
      this.$emit("showLoading", false);
      this.itens = resutl.entity;
    });
  }

  novoUsuario() {
    this.$router.push("/usuarioForm");
  }

  update(value: MUsuario) {
    this.$router.push("/usuarioForm/" + value.id);
  }

  remove(value: MUsuario) {
    this.dialogMessagePergunta = true;
    this.itemUserDelete = value;
  }

  simPergunta() {
    this.dialogMessagePergunta = false;

    this.$emit("showLoading", true);
    if (this.itemUserDelete) {
      IFactory.getUsuarioBaseClient().deletePath(
        "/" + this.itemUserDelete.id,
        (result: Resposta) => {
          this.$emit("showLoading", false);
          if (result.resposta) {
            this.$emit("showSnackbar", "Removido com sucesso!", "green");
            this.getUsuario();
          } else {
            this.$emit("showSnackbar", result.message);
          }
        }
      );
    }
  }
  naoPergunta() {
    this.dialogMessagePergunta = false;
  }

  loading(visible: boolean): void {
    this.dialogLoading = visible;
  }

  created() {
    this.getUsuario();
  }
}
