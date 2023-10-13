import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ImageViewScreen from "./app/Screens/ImageViewScreen";
import AppCard from "./app/components/AppCard";
import ListingDetails from "./app/Screens/ListingDetails";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/components/MessagesScreen";

function App() {
  return (
    <View style={styles.container}>
      <MessagesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});
registerRootComponent(App);
