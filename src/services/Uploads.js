import axios from 'axios'

const ApiUpload = axios.create({
    baseURL: "https://APIUpload.marcosvitor6.repl.co",
    headers: { 'content-type': 'multipart/form-data' }
    
})

export default ApiUpload;