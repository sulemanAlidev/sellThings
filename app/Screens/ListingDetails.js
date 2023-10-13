import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListingItem from "../components/ListItem";
export default function ListingDetails() {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Red Jacket for sale </AppText>
        <AppText style={styles.subTitle}>$100 </AppText>
      </View>
      <View style={styles.userContainer}>
        <ListingItem
          image={require("../../assets/suleman.png")}
          title="Mosh"
          subTitle={"5 Listings"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    // overFlow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
  },
  titleContainer: {
    padding: 15,
  },
});
