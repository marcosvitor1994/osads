import axios from 'axios'

const ApiBase = axios.create({
    baseURL: 'https://3000-indigo-platypus-sszf5uhk.ws-us33.gitpod.io'
})

export default ApiBase;