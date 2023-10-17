import React from "react";
import AppPicker from "../AppPicker";
import AppTextInput from "../AppTextInput";

export default function Input({ item, formik }) {
  const fieldsVal = {
    picker: <AppPicker item={item} formik={formik} />,
    input: <AppTextInput item={item} formik={formik} />,
  };
  return fieldsVal[item.field];
}
