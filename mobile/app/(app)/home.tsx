import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@/constants/colors';
import { LogOut } from 'lucide-react-native';

export default function home() {
  return (
    <SafeAreaView style={styles.grandView}>

        <TouchableOpacity style={styles.container}>
            <LogOut color={colors.white}/>       
        </TouchableOpacity>
        <View style={styles.textMov}>
            <Text style={styles.text}>Marhba, youssef</Text>          
        </View>
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  grandView: {
    flex: 1,
    margin: 24

  },
  container: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 40
    
  },
  text: {
    fontSize: 24,
    fontWeight: "bold"
  },
  textMov: {
    alignItems: "center",

  }

})