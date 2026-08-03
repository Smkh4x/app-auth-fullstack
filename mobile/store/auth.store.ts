import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { Login, Register, Me } from "@/services/auth.service";


type User = {
    id: number;
    userName: string;
    email: string;
}
type AuthStore ={
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;

    login(
        email: string,
        password: string
    ): Promise<void>

    register(
        userName: string,
        email: string,
        password: string
    ): Promise<void>

    logout(): Promise<void>

    restoreSession(): Promise<void>
}
export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,

    login:async(email,password) =>{
        const response = await Login({
            email,
            password
        });

        await SecureStore.setItemAsync(
            "token", response.accesToken
        )
        console.log("sf rah that", response.accesToken)

        console.log("res service: ", response)
        set({
            user: response.user,
            token: response.accesToken,
            isAuthenticated: true   
        })
        

    },
    register:async(userName, email, password) => {
        await Register({
            userName,
            email,
            password
        })

    },
    logout:async() => {

        await SecureStore.deleteItemAsync("token");

        set({
            user: null,
            token: null,
            isAuthenticated: false
        })


    },
    restoreSession:async() => {
        try {
            console.log("restoreSession start")
            const token = await SecureStore.getItemAsync("token");
            console.log("token is saved : ", token)

            if(!token){
                set({
                    isLoading: false
                })
                return ;
            }
            set({token})

            const user = await Me();
            console.log("user is goood",user)

            set({
                user,
                isAuthenticated: true,
                isLoading: false
            })

            
        } catch (err) {
            await SecureStore.deleteItemAsync("token");

            set({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                token: null
            })
            
        }

    }
}))
export default useAuthStore