import api from '../../api'

const state = {
  companies: [],
  status: 'loaded',
  search: '',
  pagination: {totalPages: 0, current: 0},
  count: 0
}

const getters = {
  companies: state => state.companies,
  companiesCount: state => state.count,
  companiesSearchRequest: state => state.search,
  companiesPagination: state => state.pagination,
  companiesStatus: state => state.status
}

const actions = {
  fetchCompanies({commit}, {page = 0, search = state.search} = {}) {
    commit('FETCH_COMPANIES', {search})
    api.companiesSearch({search, page})
      .then(companies => commit('UPDATE_COMPANIES', {companies}))
      .catch(err => commit('ERROR_COMPANIES', {err}))
  }
}

const mutations = {
  'FETCH_COMPANIES'(state, {search}) {
    state.search = search
    state.status = 'loading'
  },
  'UPDATE_COMPANIES'(state, {companies}) {
    state.status = 'loaded'
    state.companies = companies.content
    state.pagination = {totalPages: companies.totalPages, current: companies.number}
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
