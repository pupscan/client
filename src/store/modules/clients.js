import api from '../../api'

const state = {
  clients: [],
  status: 'loaded'
}

const getters = {
  clients: state => state.clients,
  clientsStatus: state => state.status
}

const actions = {
  fetchClients ({commit}, payload) {
    commit('FETCH_CLIENTS')
    if (payload !== undefined) {
      api.clientSearch(payload.clientSearch)
        .then(clients => commit('UPDATE_CLIENTS', {clients}))
        .catch(err => commit('ERROR_CLIENTS', {err}))
    }
    else {
      api.clients()
        .then(clients => commit('UPDATE_CLIENTS', {clients}))
        .catch(err => commit('ERROR_CLIENTS', {err}))
    }
  }
}

const mutations = {
  'FETCH_CLIENTS' (state) {
    state.status = 'loading'
  },
  'UPDATE_CLIENTS' (state, {clients}) {
    state.status = 'loaded'
    state.clients = clients
  },
  'ERROR_LOAD_CLIENTS' (state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
