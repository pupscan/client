import api from '../../api'

const state = {
  client: {},
  status: 'loaded'
}

const getters = {
  client: state => state.client,
  clientStatus: state => state.status
}

const actions = {
  fetchClient({commit}, {clientId}) {
    commit('FETCH_CLIENT')
    api.client(clientId)
      .then(client => commit('UPDATE_CLIENT', {client}))
      .catch(err => commit('ERROR_CLIENT', {err}))
  }
}

const mutations = {
  'FETCH_CLIENT'(state) {
    state.status = 'loading'
  },
  'UPDATE_CLIENT'(state, {client}) {
    state.status = 'loaded'
    state.client = client
  },
  'ERROR_CLIENT'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
