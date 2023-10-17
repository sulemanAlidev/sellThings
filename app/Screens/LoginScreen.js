import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import FormGenerator from "../components/FormGenerator";

export default function LoginScreen() {
  const loginFields = [
    {
      name: "email",
      label: "Email",
      field: "input",
      placeholder: "Enter Email",
      startIcon: "email",
      type: "text",
      validationType: "string",
      validations: [{ type: "required" }, { type: "email" }],
    },
    {
      name: "password",
      field: "input",
      placeholder: "Enter Password",
      startIcon: "lock",
      type: "password",
      label: "Password",
      validationType: "string",
      validations: [
        { type: "required" },
        {
          type: "min",
          params: 4,
          message: "Minimum 4 characters are required ",
        },
      ],
    },
  ];
  const handleSubmit = (val) => {
    console.log("val", val);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />

      <FormGenerator
        fields={loginFields}
        btnText={"Login"}
        onSubmit={handleSubmit}
        submitBtnColor="secondary"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    margin: 10,
    marginVertical: 100,
  },
  container: {
    padding: 10,
  },
});
