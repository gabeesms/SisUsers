<template>
  <div id="app" v-if="menu">
    <v-app-bar :style="menu.appBarStyle" color="secudary" app left id="card-toolbar">
      <v-app-bar-nav-icon id="card-toolbar-icons" @click="drawer = !drawer" />
       <v-toolbar-title>
        <v-list-item-content class="title">
            <v-list-item-title>
              <span id="titulo">SisUsers</span>
            </v-list-item-title>
          </v-list-item-content>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-if="menu" id="navigation-drawer" v-model="drawer" app color="primary">
      <v-list dense>
        <v-list-item link @click="drawer = !drawer">
      
        </v-list-item>
        <div v-for="itemMenu in menu.itensMenu" :key="itemMenu.title">
          <v-list-item v-if="!itemMenu.isFather" link>
            <v-list-item-title>
              <router-link style="text-decoration:none;" :to="itemMenu.path">
                <span class="white--text">{{itemMenu.title}}</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-group v-else no-action color="#fff">
            <v-list-item link style="margin-left: -15px" slot="activator">
              <v-list-item-title>
                <span class="white--text">{{itemMenu.title}}</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item link v-for="itemSubMenu in itemMenu.itens" :key="itemSubMenu.path">
              <v-list-item-content style="margin-left: -40px">
                <v-list-item-title>
                  <router-link :to="itemSubMenu.path">
                    <span class="white--text">{{ itemSubMenu.title }}</span>
                  </router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Menu, MenuItem } from "./models/menu";

// import { Display } from "../configuration/display";

export default Vue.extend({
  props: {
    menu: Menu,
  },
  data: () => ({
    expand: false,
    drawer: null,
  }),
  methods: {
    changeMenu(modulo: String){
      this.$emit("changeMenu", modulo);
    }
  },
});
</script>

<style >
</style>

<style scoped>
#titulo {
  width: 111px;
  height: 20px;
  text-align: center;
  font: normal normal 42px GeoSlab703 Md BT;
  letter-spacing: 0px;
  color: #263238;
  opacity: 1;
}
</style>
