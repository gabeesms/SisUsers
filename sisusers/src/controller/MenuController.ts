import Vue from "vue";
import ToolbarNavigationDrawer from "@componentes/ToolbarNavigationDrawer.vue";
import Component from "vue-class-component";
import { Menu, MenuItem } from "@/components/models/menu";

@Component({
  components: {
    "g-menu": ToolbarNavigationDrawer,
  },
})
export default class MenuController extends Vue {
  itensMenu: MenuItem[] = [];
  dialogLoading = false;
  nomeUsuario = "";

  menu?: Menu;

  loading(visible: boolean): void {
    this.$emit("showLoading", visible);
  }
  showMsg(title: string, msg: string | Error): void {
    this.$emit("showMessage", title, msg);
  }
  showSncakbar(msg: string, color: string = "red") {
    this.$emit("showSnackbar", msg, color);
  }

  created() {
    this.itensMenu.push(
      new MenuItem("Cadastro", "", " mdi-library-plus", true, [
        new MenuItem("Usuários", "/usuarios", "", false),
      ]),
    );

    this.menu = new Menu(
      this.nomeUsuario,
      this.itensMenu,
      "background: #FFFFFF 0% 0% no-repeat padding-box;"
    );
  }
  // }
}
