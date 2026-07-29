import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import Input from '@/components/Input'
import Button from '@/components/Button'

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

            <View style={styles.inputs}>
                <Input
                    placeholder='fullName'

                />
                <Input
                    placeholder='email'

                />
                <Input
                    placeholder='password'

                />
            </View>
            <View>
                <Button/>
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
        top: 20,
    },
    textForum: {
        alignItems: 'center',
        gap: 4,
        marginBottom: 62,
    },
    text1: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.primary

    },
    text2: {
        fontSize: 16
    },
    inputs: {
        gap: 12
    }

})