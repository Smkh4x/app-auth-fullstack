import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

type User = {
    id: number;
    userName: string;
    email:string
}
type AuthState = {
    user: User | null;
    
    token: string | null;

    isAuthenticated:boolean;

    isLoading:boolean;


    login:(email:string,password:string)=>Promise<void>;

    logout:()=>void;

    restoreSession:()=>Promise<void>;
}