import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListingItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";

const initialListings = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      size: 40,
      backgroundColor: colors.danger,
      iconColor: colors.white,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      size: 40,
      backgroundColor: colors.secondary,
      iconColor: colors.white,
    },
  },
];

export default function AccountsScreen() {
  return (
    <View style={{ backgroundColor: colors.light }}>
      <View style={styles.container}>
        <ListingItem
          title={"Muhammad Suleman Ali"}
          image={require("../../assets/suleman.png")}
          subTitle={"sulemanali060@gmail.com"}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={initialListings}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListingItem
              title={item.title}
              ImageComponenet={
                <Icon
                  name={item.icon.name}
                  size={item.icon.size}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListingItem
          title={"Logout"}
          ImageComponenet={
            <Icon name={"logout"} size={50} backgroundColor={"#ffe66d"} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
