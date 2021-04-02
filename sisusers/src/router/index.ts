import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Menu from "../views/Menu.vue";
import Usuarios from "../views/Cadastros/Usuario.vue";
import UsuarioForm from "../views/Cadastros/UsuarioForm.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
    children: [
      {
        path: "/usuarios",
        name: "Usuarios",
        component: Usuarios,
      },
      {
        path: "/usuarioForm",
        name: "UsuarioForm",
        component: UsuarioForm,
      },
      {
        path: "/usuarioForm/:id",
        name: "UsuarioForm",
        props: true,
        component: UsuarioForm,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
