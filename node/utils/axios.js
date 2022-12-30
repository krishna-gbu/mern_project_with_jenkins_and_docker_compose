const axios = require('axios');

const axiosConfig = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

module.exports = axiosConfig