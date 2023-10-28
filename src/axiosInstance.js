import axios from "axios"

const axios_instance = axios.create({
    baseURL: "https://ovasite.onrender.com/api/v1",
    headers: {
        Accept: "application/json"
    }
})

export default axios_instance