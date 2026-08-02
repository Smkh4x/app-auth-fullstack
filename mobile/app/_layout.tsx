
import { Stack, Tabs } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store"
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const {restoreSession, isLoading, isAuthenticated} = useAuthStore();

  useEffect(() => {
    restoreSession();
  },[])

  if(isLoading){
    return <ActivityIndicator />;
  }
  return(
  <Stack>
    <Stack.Screen name="index" options={{headerShown: false}} />

    <Stack.Protected guard={!isAuthenticated}>
    <Stack.Screen name="(auth)" options={{headerShown: false}} />    
    </Stack.Protected>

    <Stack.Protected guard={isAuthenticated}>
    <Stack.Screen name="(app)" options={{headerShown: false}} />   
    </Stack.Protected>

    </Stack>
  );
}
