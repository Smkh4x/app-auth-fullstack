import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { router } from 'expo-router'

export default function register() {
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
                            placeholder='fullName'

                        />
                        <Input
                            placeholder='email'

                        />
                        <Input
                            placeholder='password'
                            secureTextEntry={false}
                            
                            
                        />
                    </View>

                    <View>
                        <Button 
                        text='Register'
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