import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import { Modal } from "react-native";
import AppPickerItems from "./AppPickerItems";
import { Button } from "react-native";

export default function AppPicker({
  items,
  inputValue,
  placeholder,
  icon,
  ...props
}) {
  const [pickerValue, setPickerValue] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
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
          <AppText style={styles.text}>
            {pickerValue ? pickerValue.label : placeholder}{" "}
          </AppText>
          <MaterialCommunityIcons
            name={"menu-down"}
            size={30}
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={visible}>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View
            style={{
              width: "100%",
              borderRadius: 25,
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <AppText style={styles.closeIcon}>Close</AppText>
          </View>
        </TouchableWithoutFeedback>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <AppPickerItems
              title={item.label}
              onPress={() => {
                setVisible(false);
                setPickerValue(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  closeIcon: {
    color: colors.dark,
    padding: 10,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
