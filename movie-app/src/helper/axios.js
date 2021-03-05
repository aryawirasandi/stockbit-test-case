import config from "../utils/config";
import axios from "axios";

const instance = axios.create({
    baseURL : config.baseUrl,
    params : {
        apiKey : config.apiKey,
    },
    headers : 'application/json'
})


export default instance;