import http from './http'

export default {
  clients: () => http.get('/clients').then(response => response.data.content),
  client: clientId => http.get('/clients/client/' + clientId).then(response => response.data),
  activities: clientId => http.get('/clients/client/activities/' + clientId).then(response => response.data),
  clientsSearch: match => http.post('/clients/search', match).then(response => response.data.content),

  companies:() => http.get('/companies').then(response => response.data.content),
  companiesSearch: match => http.post('/companies/search', match).then(response => response.data.content),
}
