import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.11.116:3009/api"
}) 