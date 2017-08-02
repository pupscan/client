import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../authentication'
import App from '../App.vue'
import Login from '../Login.vue'
import p404 from '../404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: App, beforeEnter: (to, from, next) => auth.isLogged() ? next() : next({path: '/login'})},
    {path: '/login', component: Login},
    {path: '*', component: p404}
  ]
})
