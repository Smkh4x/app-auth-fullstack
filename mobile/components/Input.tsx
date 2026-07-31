import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'

type props = {
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    secureTextEntry: boolean
}
export default function Input({placeholder, value,secureTextEntry, onChangeText}: props) {
  return (  
    <View style={styles.input}>
      <TextInput
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    input: {      
        backgroundColor: colors.inputBg,
        width: 440,
        height: 60,
        borderRadius: 15,
        justifyContent: "center",
        paddingHorizontal: 10,
        }

})