import axios from "axios";


const instance = axios.create({
    baseURL:'http://node:5000'
})

export default instance;