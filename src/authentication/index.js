import http from '../api/http'
import authHttp from './http'

export default {
  isLogged: () => http.defaults.headers.common.Authorization,
  login(username, password) {
    if (username && password) {
      return authHttp.post('/oauth/token?grant_type=password&username=' + username + '&password=' + password)
        .then(response => http.defaults.headers.common.Authorization = response.data.token_type + ' ' + response.data.access_token)
    }
    return Promise.reject()
  },
  logout: () => http.defaults.headers.common.Authorization = ''
}
