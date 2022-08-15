import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function FactsList({ item }) {
  const { id, title, event_date_utc, details } = item;

  return (
    <View style={styles.wrapper}>
      <View>
        <Text> {id} </Text>
        <Text styles={{ fontSize: 30 }}> {title} </Text>
        <Text> {details} </Text>
        <Text> {event_date_utc} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    margin: 10,
    align: "center",
    borderRadius: 20,
  },
});
