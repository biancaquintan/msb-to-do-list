import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/'
})
