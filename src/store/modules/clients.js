import api from '../../api'

const state = {
  clients: [],
  status: 'loaded',
  count: 0
}

const getters = {
  clients: state => state.clients,
  clientsCount: state => state.count,
  clientsStatus: state => state.status
}

const actions = {
  fetchClients ({commit}, payload) {
    commit('FETCH_CLIENTS')
    if (payload !== undefined) {
      api.clientsSearch(payload.search)
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
    state.clients = clients.content
    state.count = clients.totalElements
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
