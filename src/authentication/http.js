import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.authentication.pupscan.com/',
  auth: {
    username: 'html5',
    password: 'password'
  }
})
