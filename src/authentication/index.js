import http from '../api/http'

export default {
  isLogged: () => http.defaults.headers.common.Authorization,
  login(token) {
    if (token) {
      http.defaults.headers.common.Authorization = 'bearer ' + token
      return Promise.resolve()
    }
    return Promise.reject()
  },
  logout: () => http.defaults.headers.common.Authorization = ''
}
