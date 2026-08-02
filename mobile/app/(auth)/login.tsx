import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import colors from '@/constants/colors'
import { useAuthStore } from "@/store/auth.store"

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const [serverError, setServerError] = useState("")
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const { login } = useAuthStore();

    const handleLogin = async () => {
        if(!email){
            setErrors(prev => ({
                ...prev,
                email: "emial mkinc"
            }))
        } else if (!password){
            setErrors(prev => ({
                ...prev,
                password: "password mkinx"
            }))
        }
        try {
            setIsLoading(true)
            await login(email, password)
        //console.log(response);
        router.replace('/home');            
        } catch (err: any) {
            setServerError(err.response?.data?.error)
            console.log(err.response.data.error)
            
        }finally {
            setIsLoading(false)
        }

    }
  return (
        <SafeAreaView style={styles.container}>
            <View >

                <View style={styles.textForum}>
                    <View>
                        <Text style={styles.text1}>Welcome Back</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>Login to your account</Text>
                    </View>
                </View>

                <View style={{ gap: 12 , alignItems: "center"}}>
                    <View style={styles.inputs}>
                        <Input
                            placeholder='email'
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                setErrors(prev => ({
                                    ...prev,
                                    email: ""
                                }))
                            }}
                            secureTextEntry={false}
                            error={errors.email}

                        />
                        <Input
                            placeholder='password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text)
                                setErrors(prev => ({
                                    ...prev,
                                    password: ""
                                }))
                            }}   
                            error={errors.password}                         

                        />
                    </View>
                    <Text style={{color: colors.error}}>{serverError}</Text>
                    <View>
                        <Button 
                        text='login'
                        onPress={handleLogin}
                        isLoading={isLoading}
                        
                        />
                    </View>


                    <View style={styles.text3}>
                        <Text>No account yet ? </Text>
                        <TouchableOpacity onPress={() => { router.push('/register') }}>
                            <Text style={{ color: colors.primary, textDecorationLine: "underline"}}>register here</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: "center",
        paddingTop: 120
        
        
    },
    textForum: {
        alignItems: 'center',
        gap: 4,
        marginBottom: 62,
    },
    text1: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.primary

    },
    text2: {
        fontSize: 16
    },
    text3: {
        flexDirection: "row",
        alignItems: "center"

    },
    inputs: {
        gap: 12
    }

})