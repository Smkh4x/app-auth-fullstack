import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { router } from 'expo-router'
import { Register } from '@/services/auth.service'



export default function register() {
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [errors, setErrors] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const handleregister = async () => {
        if (!userName) {
            setErrors(prev => ({
                ...prev,
                userName: "username mkinx"
            }))
            return;
        } else if (!email) {
            setErrors(prev => ({
                ...prev,
                email: "email mkinx"
            }))
            return;
        }else if(!password){
            setErrors(prev => ({
                ...prev,
                password: "password mkinx"
            }))
            return;
        }
        try {
            setIsLoading(true)
            const response = await Register({
                userName,
                email,
                password
            });
            console.log("res", response)
            router.replace('/login');

        } catch (err: any) {
            setServerError(err.response?.data?.error)
        } finally {
            setIsLoading(false)

        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <View >
                <View style={styles.textForum}>
                    <View>
                        <Text style={styles.text1}>Create new account</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>please fill form to contunue</Text>
                    </View>
                </View>

                <View style={{ gap: 12, alignItems: "center" }}>
                    <View style={styles.inputs}>
                        <Input
                            placeholder='userName'
                            value={userName}
                            onChangeText={(text) => {
                                setuserName(text);
                                setErrors(prev => ({
                                    ...prev,
                                    userName: ""
                                }))
                            }}
                            secureTextEntry={false}
                            error={errors.userName}

                        />
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
                            secureTextEntry={false}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text);
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
                            text='Register'
                            onPress={handleregister}
                            isLoading={isLoading}

                        />

                    </View>

                    <View style={styles.text3}>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => { router.push('/login') }}>
                            <Text style={{ color: colors.primary, textDecorationLine: "underline" }}>login here</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </SafeAreaView>

    )
};
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