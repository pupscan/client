import api from '../../api'

const state = {
  companies: [],
  status: 'loaded'
}

const getters = {
  companies: state => state.companies,
  companiesStatus: state => state.status
}

const actions = {
  fetchCompanies ({commit}, payload) {
    commit('FETCH_COMPANIES')
    if (payload !== undefined) {
      api.companiesSearch(payload.companiesSearch)
        .then(companies => commit('UPDATE_COMPANIES', {companies}))
        .catch(err => commit('ERROR_COMPANIES', {err}))
    }
    else {
      api.companies()
        .then(companies => commit('UPDATE_COMPANIES', {companies}))
        .catch(err => commit('ERROR_COMPANIES', {err}))
    }
  }
}

const mutations = {
  'FETCH_COMPANIES' (state) {
    state.status = 'loading'
  },
  'UPDATE_COMPANIES' (state, {companies}) {
    state.status = 'loaded'
    state.companies = companies
  },
  'ERROR_LOAD_COMPANIES' (state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
