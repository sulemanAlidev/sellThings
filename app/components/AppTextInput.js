import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppTextInput({ inputValue, icon, ...props }) {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={colors.secondary}
          />
        </View>
      )}
      <TextInput
        onChangeText={(newText) => {
          inputValue(newText);
          setValue(newText);
        }}
        style={styles.text}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
});
