import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'

type props = {
    placeholder: string,
    value?: string,
    onChangeText?: (text: string) => void
}
export default function Input({placeholder, value, onChangeText}: props) {
  return (
    <View style={styles.input}>
      <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    input: {      
        backgroundColor: colors.inputBg,
        width: 350,
        height: 50,
        borderRadius: 18,
        justifyContent: "center",
        paddingHorizontal: 10,
        }

})