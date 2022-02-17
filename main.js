import Vue from 'vue';

import App from './App.vue';
import Adduser from './components/Adduser.vue'
import Edituser from './components/Edituser.vue'
import Getuser from './components/Getuser.vue'
import Getalluser from './components/Getalluser.vue'
import Deleteuser from './components/Deleteuser.vue'

import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/getuser', component:Getuser },
  { path: '/getalluser', component: Getalluser },
  { path: '/adduser', component: Adduser },
  {path:'/edituser',component:Edituser},
  {path:'/deleteuser',component:Deleteuser}
]
const router=new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
