import axios from 'axios'
import router from '../router'

const http = axios.create({baseURL: 'https://api.ticket.pupscan.com/'})
http.interceptors.response.use(
    (response) => response,
    (error) => {
        if (401 === error.response.status) {
            router.push('/logout')
        }
        else {
            return Promise.reject(error)
        }
    });
export default http
