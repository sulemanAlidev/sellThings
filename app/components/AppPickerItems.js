import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";

export default function AppPickerItems({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    padding: 10,
    fontSize: 18,
  },
});
