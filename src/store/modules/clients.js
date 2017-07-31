import api from '../../api'

const state = {
  clients: [],
  status: 'loaded',
  search: '',
  pagination: {totalPages: 0, current: 0},
  count: 0
}

const getters = {
  clients: state => state.clients,
  clientsCount: state => state.count,
  clientsSearchRequest: state => state.search,
  clientsPagination: state => state.pagination,
  clientsStatus: state => state.status
}

const actions = {
  fetchClients({commit}, {page = 0, search = state.search} = {}) {
    commit('FETCH_CLIENTS')
    api.clientsSearch({search, page})
      .then(clients => commit('UPDATE_CLIENTS', {clients, search}))
      .catch(err => commit('ERROR_CLIENTS', {err}))
  }
}

const mutations = {
  'FETCH_CLIENTS'(state) {
    state.status = 'loading'
  },
  'UPDATE_CLIENTS'(state, {clients, search}) {
    state.status = 'loaded'
    state.clients = clients.content
    state.search = search
    state.pagination = {totalPages: clients.totalPages, current: clients.number}
    state.count = clients.totalElements
  },
  'ERROR_LOAD_CLIENTS'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
