import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import client from './modules/client'
import logger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clients,
    client
  },
  strict: debug,
  plugins: debug ? [logger()] : []
})
