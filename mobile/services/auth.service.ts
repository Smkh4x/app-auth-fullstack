import { api } from "./api";

type myData = {
    data: any
}
export const register = async ({data}:myData) => {
    const res = await api.post("auth/register", data)
}