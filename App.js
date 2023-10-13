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

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Screen>
        <Listings />
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
