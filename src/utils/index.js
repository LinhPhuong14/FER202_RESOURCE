import axios from "axios"
//json-server --watch database.json --port 9999
const PORT = 9999

export const instance = axios.create({
    baseURL: `http://localhost:${PORT}`,
})
