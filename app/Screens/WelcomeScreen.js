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
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      blurRadius={5}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Login"}
          onPress={() => console.log("login button clicked")}
          color="primary"
        />
        <AppButton
          title={"Register"}
          onPress={() => console.log("register button clicked")}
          color="secondary"
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
  tagLine: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  buttonContainer: {
    width: "100%",
    margin: 2,
  },
});
