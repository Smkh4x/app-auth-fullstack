import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'
import { router } from 'expo-router'
type props = {
  text: string
}
export default function Button({text}: props) {
  return (
    <TouchableOpacity style={styles.Signin}
    
    >
      <Text style={{color: colors.white}}>
        {text}
      </Text>
    </TouchableOpacity>

  )
};
const styles = StyleSheet.create({
    Signin: {
        backgroundColor: colors.primary,
        width: 440,
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

    }

})