import {  Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '@/constants/colors'
type props = {
  text: string;
  isLoading?: boolean;
  onPress?: () => void;
}
export default function Button({text, onPress, isLoading}: props) {
  
  return (
    <TouchableOpacity style={styles.Signin}
    onPress={onPress}
    disabled={isLoading}
    
    >
      {isLoading? (<ActivityIndicator color="white" /> ): ( // this is a cercle in login / register [if isloading ]
      <Text style={{color: colors.white}}> 
        {text} 
      </Text>
      
    )}
    
      

    </TouchableOpacity>


  )
};
const styles = StyleSheet.create({
    Signin: {
        backgroundColor: colors.primary,
        width: "100%",
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        color: colors.white

    }

})