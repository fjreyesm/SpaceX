import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function FactsList({ item }) {
  const { id, title, event_date_utc, details } = item;

  return (
    <View style={styles.back}>
      <View style={styles.wrapper}>
        <Text style={styles.title}> {title} </Text>
        <Text> {event_date_utc} </Text>
        <Text style={styles.details}> {details} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 15,
    align: "center",
    borderRadius: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },

  details: {
    fontSize: 16,
    fontWeight: "semibold",
    marginTop: 10,
  },

  back: {
    backgroundColor: "lightgrey",
  },
});
