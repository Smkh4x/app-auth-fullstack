import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { router } from 'expo-router'
import { Register } from '@/services/auth.service'
import { push } from 'expo-router/build/global-state/routing'


export default function register() {
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleregister = async() => {
        if(!userName || !email || !password){
            Alert.alert("Please, full all information")
            return;
        };
        try {
        const response = await Register({
            userName,
            email,
            password
        });
        console.log("res" ,response)
        router.navigate('/login');
        } catch (err) {
            console.log(err)
            Alert.alert("Error", "register faild")
            
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


                <View style={{ gap: 12 , alignItems: "center"}}>
                    <View style={styles.inputs}>
                        <Input
                            placeholder='userName'
                            value={userName}
                            onChangeText={setuserName}
                            secureTextEntry={false}

                        />
                        <Input
                            placeholder='email'
                            value={email}
                            onChangeText={setEmail}
                            secureTextEntry={false}

                        />
                        <Input
                            placeholder='password'
                            secureTextEntry={false}
                            value={password}
                            onChangeText={setPassword}
                            
                        />
                    </View>

                    <View>
                        <Button 
                        text='Register'
                        onPress={handleregister}
                        />
                    </View>

                    <View style={styles.text3}>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => { router.push('/login') }}>
                            <Text style={{ color: colors.primary, textDecorationLine: "underline"}}>login here</Text>
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