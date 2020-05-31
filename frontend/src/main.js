import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import AuthPage from '@/pages/AuthPage'
import SuccessPage from '@/pages/SuccessPage'
import NotFound from '@/pages/NotFound'
import '@/helpers/global.js'
import Buefy from 'buefy'
import { store } from './store'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Buefy);

const routes = [
  { path: '*', component: NotFound },
  { path: '/registration', component: RegistrationPage },
  { path: '/auth', component: AuthPage },
  { path: '/success', component: SuccessPage },
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')