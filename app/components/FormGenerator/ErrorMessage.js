import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppText from "../AppText";

export default function ErrorMessage({ error }) {
  return <AppText>{error} </AppText>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
