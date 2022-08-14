import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import LaunchCard from "./LaunchCard";

export default function LaunchsList({ item }) {
  const {
    flight_number,
    mission_name,
    launch_year,
    rocket_name,
    url_img,
    orbit,
    payload_type,
    manufacturer,
    reference_system,
  } = item;

  // console.log("tipo de arr es : " + typeof arr);
  //console.log(JSON.parse(JSON.stringify(launch)));

  console.log("en LaunchList props recibidas ==>" + mission_name);
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.imagen}>
          <Image source={{ uri: url_img }} style={{ width: 60, height: 60 }} />
        </View>
        <View style={styles.inf}>
          <Text style={{ fontSize: 20 }}> {mission_name} </Text>
          <Text> {rocket_name} </Text>
          <Text> {launch_year} </Text>
          <Text> {manufacturer} </Text>
          <Text> {reference_system} </Text>
        </View>
        <View style={styles.cap_view}>
          <Text style={styles.capsules}> {orbit}</Text>
          <Text style={styles.capsules}> {payload_type} </Text>
        </View>
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
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },

  inf: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  imagen: {
    width: "20%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  cap_view: {
    width: "20%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  capsules: {
    border: "1px solid black",
    borderRadius: 20,
    fontSize: 12,
    textAlign: "center",
    margin: 5,
    padding: 5,
    backgroundColor: "lightgrey",
  },

  otro: {
    marginTop: Platform.OS === "android" ? 30 : 20,
  },
});
