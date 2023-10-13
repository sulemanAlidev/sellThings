import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

export default function ({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
