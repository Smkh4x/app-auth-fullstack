import { api } from "./api";

type registerData = {
    userName: string,
    email: string,
    password: string
}
type loginData = {
    email: string,
    password: string
}
export const Register = async (data:registerData) => {
    const res = await api.post("/auth/register", data);
    return res.data

}

export const Login = async(data:loginData) => {
    const res = await api.post("/auth/login", data);
    return res.data

}
export const Me = async() => {
    const res = await api.get("/auth/me");
    console.log(res);
    return res.data

}