import api from '../../api'

const state = {
  companies: [],
  status: 'loaded',
  count: 0
}

const getters = {
  companies: state => state.companies,
  companiesCount: state => state.count,
  companiesStatus: state => state.status
}

const actions = {
  fetchCompanies({commit}, payload) {
    commit('FETCH_COMPANIES')
    if (payload === undefined) {
      api.companies()
        .then(companies => commit('UPDATE_COMPANIES', {companies}))
        .catch(err => commit('ERROR_COMPANIES', {err}))
    } else {
      api.companiesSearch(payload.search)
        .then(companies => commit('UPDATE_COMPANIES', {companies}))
        .catch(err => commit('ERROR_COMPANIES', {err}))
    }
  }
}

const mutations = {
  'FETCH_COMPANIES'(state) {
    state.status = 'loading'
  },
  'UPDATE_COMPANIES'(state, {companies}) {
    state.status = 'loaded'
    state.companies = companies.content
    state.count = companies.totalElements
  },
  'ERROR_LOAD_COMPANIES'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
