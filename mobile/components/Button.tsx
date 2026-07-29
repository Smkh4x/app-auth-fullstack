import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'
type props = {
placeholder: string,
}
export default function Button({placeholder}: props) {
  return (
    <TouchableOpacity style={styles.Signin}>
      <TextInput
      placeholder={placeholder}
      />
    </TouchableOpacity>

  )
};
const styles = StyleSheet.create({
    Signin: {
        backgroundColor: colors.primary,
        width: 350,
        height: 35,
        borderRadius: 18,

    }

})