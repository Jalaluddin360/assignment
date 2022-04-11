import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import router from "./router";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";

Vue.use(vueRouter);
Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
