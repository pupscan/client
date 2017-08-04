import axios from 'axios'
// import qsd from '../authentication'

// Configure your axios
let instance = axios.create({baseURL: 'https://api.ticket.pupscan.com/'})
instance.interceptors.response.use(null, function (error) {
  console.log(error)
  return Promise.reject(error);
})

export default instance
