import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RegistrationPage from './pages/RegistrationPage.vue'
import AuthPage from './pages/AuthPage'
import '@/helpers/global.js'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Buefy)

const routes = [
  { path: '/registration', component: RegistrationPage },
  { path: '/auth', component: AuthPage },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')