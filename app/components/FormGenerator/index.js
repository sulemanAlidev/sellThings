import React from "react";
import { Form, useFormik } from "formik";
import { View } from "react-native";
import * as Yup from "yup";

import Input from "./Input";
import AppButton from "../AppButton";
import { createYupSchema } from "./validationSchema";
const validationSchema = {
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
};
export default function FormGenerator({
  onSubmit,
  btnText,
  fields,
  initialVal,
  submitBtnColor,
}) {
  const getInitialValues = () => {
    let obj = {};
    fields.forEach((item) => {
      obj[item.name] = "";
    });
    return { ...obj, ...initialVal };
  };
  const yepSchema = fields.reduce(createYupSchema, {});
  const formik = useFormik({
    initialValues: getInitialValues(),
    onSubmit: (values) => {
      onSubmit(values, formik);
    },
    validationSchema: Yup.object().shape(yepSchema),
    enableReinitialize: true,
  });

  return (
    <View>
      {fields.map((item, index) => (
        <View key={index}>
          <Input item={item} formik={formik} />
        </View>
      ))}
      <AppButton
        title={btnText ? btnText : "Submit"}
        onPress={formik.handleSubmit}
        color={submitBtnColor ? submitBtnColor : "primary"}
      />
    </View>
  );
}
