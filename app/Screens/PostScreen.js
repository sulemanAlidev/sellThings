import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import FormGenerator from "../components/FormGenerator";
const initialItems = [
  {
    label: "Furniture",
    value: 1,
  },
  { label: "Clothing", value: 2 },
  {
    label: "Camera",
    value: 3,
  },
];
export default function PostScreen() {
  const loginFields = [
    {
      name: "title",
      label: "Title",
      field: "input",
      placeholder: "Title",
      type: "text",
      validationType: "string",
      validations: [{ type: "required" }],
    },
    {
      name: "price",
      field: "input",
      placeholder: "Price",
      type: "text",
      label: "Price",
      validationType: "string",
      validations: [
        { type: "required" },
        {
          type: "min",
          params: 2,
          message: "Minimum 4 characters are required ",
        },
      ],
    },
    {
      name: "category",
      field: "picker",
      placeholder: "Category",
      type: "text",
      items: initialItems,
      label: "Category",
      validationType: "object",
      validations: [{ type: "required" }],
    },
    {
      name: "description",
      field: "input",
      placeholder: "Description",
      type: "text",
      label: "Description",
      multiline: true,
      validationType: "string",
      validations: [{ type: "required" }],
    },
  ];
  const handleSubmit = (val) => {
    console.log("val", val);
  };
  return (
    <View style={styles.container}>
      <FormGenerator
        fields={loginFields}
        btnText={"Post"}
        onSubmit={handleSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
