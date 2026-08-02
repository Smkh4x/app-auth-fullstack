import { View, StyleSheet, TextInput, Text } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'

type props = {
  placeholder: string,
  value: string,
  onChangeText: (text: string) => void,
  secureTextEntry: boolean,
  error?: string,

}
export default function Input({ placeholder, value, secureTextEntry, onChangeText, error,  }: props) {
  return (
    <View>
      <View
        style={[
          styles.input,
          error && styles.inputError
        ]}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />

      </View>
      <View style={{ left: 20, padding: 2 }}>
        {error && <View >
          <Text style={{ color: colors.error, fontSize: 12, fontWeight: "500" }}>{error}</Text>
        </View>

        }
      </View>

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
  },
  inputError: {
    backgroundColor: colors.inputBg,
    width: 440,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 10,

    borderWidth: 1,
    borderColor: colors.error,
  }
})