import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ImageViewScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.cancelButton}
        name="close"
        size={35}
        color={"white"}
      />
      <MaterialCommunityIcons
        style={styles.deleteButton}
        name="trash-can-outline"
        size={35}
        color={"white"}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
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
    position: "absolute",
    top: 70,
    left: 30,
  },
  deleteButton: {
    position: "absolute",
    top: 70,
    right: 30,
  },
});
