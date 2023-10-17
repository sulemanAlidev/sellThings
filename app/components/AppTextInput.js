import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ErrorMessage from "./FormGenerator/ErrorMessage";

export default function AppTextInput({ item, formik, ...props }) {
  const { startIcon, multiline, name, placeholder, type } = item;
  const { handleChange, errors, touched, handleBlur } = formik;
  return (
    <>
      <View style={styles.container}>
        {startIcon && (
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={startIcon}
              size={25}
              color={colors.secondary}
            />
          </View>
        )}
        <TextInput
          onChangeText={handleChange(name)}
          style={styles.text}
          onBlur={formik.handleBlur(name)}
          placeholder={placeholder}
          secureTextEntry={type == "password"}
          multiline={multiline ? multiline : false}
          {...props}
        />
      </View>
      <View style={styles.error}>
        {errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
  },
  error: {
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});
