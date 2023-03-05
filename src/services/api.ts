import axios from 'axios';

const api = axios.create({
    baseURL: "https://hamburgueriaapi-production.up.railway.app/"
})

export default api;