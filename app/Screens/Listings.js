import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

export default function Listings() {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch for sale",
      price: 150,
      image: require("../../assets/couch.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
});
