import axios from 'axios'

const ApiBase = axios.create({
    baseURL: 'https://4000-indigo-platypus-sszf5uhk.ws-us38.gitpod.io'
})

export default ApiBase;
