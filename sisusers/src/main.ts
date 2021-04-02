import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css'
import VueTheMask from 'vue-the-mask';
import { mask } from 'vue-the-mask';

Vue.use(VueTheMask)
Vue.config.productionTip = false;

new Vue({

  directives: { mask },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
