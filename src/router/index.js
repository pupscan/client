import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../authentication'
import App from '../App.vue'
import p404 from '../404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      beforeEnter: (to, from, next) => {
        if (auth.isLogged()) {
          next()
        } else {
          auth.login(to.query.token)
            .then(() => next())
            .catch(() => next('/login'))
        }
      }
    },
    {path: '/login', beforeEnter: () => window.location.href = 'https://portal.pupscan.com/login'}, // eslint-disable-line no-undef
    {path: '*', component: p404}
  ]
})
