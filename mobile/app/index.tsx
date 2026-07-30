import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "@/constants/colors";
import { router } from "expo-router";
import register from "./(auth)/register";
export default function Index() {

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/gges.png")}
          resizeMode="cover"
          style={{
            width: 100,
            height: 100,
          }}
        >
        </ImageBackground>

        <View style={styles.intro}>

          <View>
          <Text style={styles.text}>Welcome</Text>            
          </View>

          <View>
            <Text style={styles.text2}>A simple and secure way to access your account. </Text>
            <Text style={styles.text2}> Create an account or sign in to continue. </Text>
          </View>

        </View>
        <TouchableOpacity style={styles.next} 
        onPress={() => {
          router.push("/register")
          
        }}
        
        >
            <Text style={{
              color: colors.primary,
              fontSize: 24,
              fontWeight: "black"
            }}>Next</Text>
        </TouchableOpacity>

      </View>
    </>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryDark,
    gap: 80
  },
  intro: {
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 4
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: "heavy"
  },
  next: {
    backgroundColor: colors.white,
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }


})
