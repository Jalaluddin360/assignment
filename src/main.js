import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import router from "./router";
import VueSax from "vuesax";
import "vuesax/dist/vuesax.css";
import store from "./store";

Vue.use(VueSax);

Vue.use(vueRouter);

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
