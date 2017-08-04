import http from '../api/http'

export default {
  isLogged: () => http.defaults.headers.common['Authorization'],
  login: (username, password) => {
    localStorage.token = '269ec58d-ee8f-4c10-9654-321bc609e370'
    http.defaults.headers.common['Authorization'] = 'Bearer 269ec58d-ee8f-4c10-9654-321bc609e370'
    return Promise.resolve(true)
  },
  logout: () => http.defaults.headers.common['Authorization'] = ''
}
