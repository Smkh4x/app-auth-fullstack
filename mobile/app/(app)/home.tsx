import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@/constants/colors';
import { LogOut } from 'lucide-react-native';
import { useAuthStore } from "@/store/auth.store"
import { router } from 'expo-router';
import * as SecureStore from "expo-secure-store";

export default function home() {

  const checkToken = async () => {
    const token = await SecureStore.getItemAsync("token");
    console.log("secure token :",token)
  }
  checkToken();

  const {user, token, isAuthenticated, logout} = useAuthStore();

  console.log("USER", user);
  console.log("TOKEN", token);
  console.log("isAuthenticated", isAuthenticated);

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  }
  return (
    <SafeAreaView style={styles.grandView}>

        <TouchableOpacity 
        style={styles.container}
        onPress={handleLogout}
        
        >
            <LogOut color={colors.white}/>       
        </TouchableOpacity>
        <View style={styles.textMov}>
            <Text style={styles.text}>Marhba, {user?.userName} 👋</Text>                                                                 
        </View>
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  grandView: {
    flex: 1,
    margin: 24

  },
  container: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 40
    
  },
  text: {
    fontSize: 24,
    fontWeight: "bold"
  },
  textMov: {
    alignItems: "center",

  }

})