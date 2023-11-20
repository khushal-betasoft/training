import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import VueRouter from 'vue-router'
import router from './routes'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.config.productionTip = false

Vue.use(VueSweetalert2);
Vue.use(VueRouter);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')