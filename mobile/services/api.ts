import useAuthStore from "@/store/auth.store";
import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.11.116:3009/api"
})

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;

    if(token){
        config.headers.authorization = `Bearer ${token}`;
    }
    return config
},
    (error)=> Promise.reject(error)
)

api.interceptors.response.use((response) => {
    return response;
},
(error)=>{


    if(error.response?.status === 401){

        const { logout } = useAuthStore.getState();

        logout();

    }


    return Promise.reject(error);

})
export default api;