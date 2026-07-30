import { api } from "./api";

type registerData = {
    fullName: string,
    email: string,
    password: string
}
type loginData = {
    email: string,
    password: string
}
type registerParams = {
    data:registerData,
}
type loginParams = {
    data:loginData
}
export const register = async ({data}:registerParams) => {
    const res = await api.post("/auth/register", {
                fullName:"Youssef",
        email:"test@test.com",
        password:"123456"
    });
    console.log(res.data);
    return res.data

}

export const login = async({data}:loginParams) => {
    const res = await api.post("auth/login", data);
    console.log(res.data);
    return res.data

}
export const me = async() => {
    const res = await api.get("auth/me");
    console.log(res);
    return res.data

}