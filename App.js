import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ImageViewScreen from "./app/Screens/ImageViewScreen";
import AppCard from "./app/components/AppCard";
import ListingDetails from "./app/Screens/ListingDetails";
import Screen from "./app/Screens/Screen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListingItem from "./app/components/ListItem";
import AccountsScreen from "./app/Screens/AccountsScreen";
import Listings from "./app/Screens/Listings";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";
import AppSwitch from "./app/components/AppSwitch";
import AppPicker from "./app/components/AppPicker";
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
function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Screen>
        <AppPicker
          items={initialItems}
          icon={"apps"}
          placeholder="categories"
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
registerRootComponent(App);
