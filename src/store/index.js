import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import client from './modules/client'
import companies from './modules/companies'
import logger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clients,
    client,
    companies
  },
  strict: debug,
  plugins: debug ? [logger()] : []
})
