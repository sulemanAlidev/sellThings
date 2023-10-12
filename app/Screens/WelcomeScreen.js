import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  Button,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Button
          onPress={() => console.log("Login pressed")}
          color={"green"}
          title="Login"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Button
          color={"#0f4a7e"}
          style={styles.registerButton}
          title="Register"
          onPress={() => console.log("register pressed")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  registerButton: {
    width: "100%",
  },
  loginButton: {
    width: "100%",
    margin: 2,
  },
});
