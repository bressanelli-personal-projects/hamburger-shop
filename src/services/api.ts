import axios from 'axios';

const api = axios.create({
    baseURL: "https://hamburgueria-2.herokuapp.com/"
})

export default api;