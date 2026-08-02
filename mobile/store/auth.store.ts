import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { Login, Register } from "@/services/auth.service";
import { User } from "lucide-react-native";

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

    logout(): void

    restoreSession(): Promise<void>
}
const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,

    login:async(email,password) =>{


    },
    register:async(userName, email, password) => {

    },
    logout:() => {

    },
    restoreSession:async() => {

    }
}))
export default useAuthStore