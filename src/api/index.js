import http from './http'

export default {
  client: clientId => http.get('/clients/client/' + clientId).then(response => response.data),
  activities: clientId => http.get('/clients/client/activities/' + clientId).then(response => response.data),
  clientsSearch: query => http.post('/clients/search', query).then(response => response.data),

  companiesSearch: query => http.post('/companies/search', query).then(response => response.data)
}
