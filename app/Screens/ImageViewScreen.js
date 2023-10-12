import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageViewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cancelButton}></View>
      <View style={styles.deleteButton}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: { width: "100%", height: "100%" },
  cancelButton: {
    backgroundColor: "green",
    width: 50,
    height: 50,
    position: "absolute",
    top: 70,
    left: 30,
  },
  deleteButton: {
    backgroundColor: "#0f4a7e",
    width: 50,
    height: 50,
    position: "absolute",
    top: 70,
    right: 30,
  },
});
