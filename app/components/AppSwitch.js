import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
export default function AppSwitch() {
  const [value, setValue] = useState("");

  return (
    <View>
      <Switch value={value} onValueChange={(n) => setValue(n)} />
    </View>
  );
}

const styles = StyleSheet.create({});
