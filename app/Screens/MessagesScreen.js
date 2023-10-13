import React, { useState } from "react";
import { FlatList, Text } from "react-native";

import ListingItem from "../components/ListItem";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initailMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/suleman.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/suleman.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/suleman.png"),
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
          <ListingItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("list item pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
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
