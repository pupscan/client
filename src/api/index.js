import http from './http'

export default {
  clients: () => http.get('/').then(response => response.data),
  client: clientId => http.get('/client/' + clientId).then(response => response.data),
  activities: clientId => http.get('/client/activities/' + clientId).then(response => response.data),
  clientSearch: match => http.post('/client/search', match).then(response => response.data)
}
