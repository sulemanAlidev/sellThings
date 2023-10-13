import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FlatList, Text } from "react-native";

import ListingItem from "./ListItem";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ListItemDeleteAction from "./ListItemDeleteAction";

const initailMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initailMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={messages}
        ItemSeparatorComponent={() => (
          <View style={styles.horizantolSeparator} />
        )}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <GestureHandlerRootView style={styles.container}>
            <ListingItem
              image={item.image}
              title={item.title}
              subTitle={item.description}
              onPress={() => console.log("list item pressed", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          </GestureHandlerRootView>
        )}
        refreshing={false}
        onRefresh={() => setMessages(initailMessages)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  horizantolSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
  },
});
