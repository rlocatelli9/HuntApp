import axios from 'axios'

const api = axios.create({
  baseURL: "http://172.18.0.3:3000/api"
})

export default api;