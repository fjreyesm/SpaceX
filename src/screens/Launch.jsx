import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { getLaunchApiByFlightNumberApi } from "../api/Launches";
import { Button, Alert, Image } from "react-native";

export default function Launch(props) {
  const navigation = useNavigation();
  const [details, setDetails] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      await loadLaunch();
    })();
  }, []);

  const loadLaunch = async () => {
    try {
      const result = await getLaunchApiByFlightNumberApi(props.route.params.id);
      setDetails(result);
    } catch (error) {
      console.log(error);
    }
  };
  // getLaunchApiByFlightNumberApi(flightNumber);
  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: "https://i.imgur.com/s0nFhtt.jpg" }}
        style={{ width: 400, height: 250 }}
      />

      <Text style={styles.title}> {details.mission_name}</Text>

      <View style={styles.subtitle}>
        <Text style={styles.text}>
          {details.rocket?.second_stage?.payloads[0].nationality}
        </Text>
        <Text> {details.launch_year}</Text>
      </View>
      <View style={styles.rocket}>
        <Text style={styles.capsules}>Rocket </Text>
        <Text style={styles.capsules}>{details.rocket?.rocket_name}</Text>
        <Text style={styles.capsules}>Type: {details.rocket?.rocket_type}</Text>
      </View>
      <View style={styles.rocket}>
        <Text style={styles.failure}>
          {details.launch_success ? "Success" : "Failure"}
        </Text>
      </View>

      <Text style={styles.details}> Details: {details.details}</Text>
      <View>
        <Text style={styles.text}>{details.launch_site?.site_name_long}</Text>
        <Text style={styles.text}> {details.launch_date_utc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
    height: "100%",
    justifyContent: "space-between",
  },
  items: {
    flexDirection: "column",

    margin: 10,
  },

  rocket: {
    margin: 5,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },

  details: {
    fontSize: 24,
    alignItems: "center",
    marginTop: 0,

    alignSelf: "left",
  },

  subtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },

  imagen: {
    justifyContent: "center",
    backgroundColor: "orange",
  },

  text: {
    marginTop: 15,
  },

  failure: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    fontSize: 13,
    textAlign: "center",
    margin: 5,
    padding: 5,
    backgroundColor: "lightgrey",
    width: "55%",
  },

  capsules: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    fontSize: 12,
    textAlign: "center",
    margin: 5,
    padding: 5,
    backgroundColor: "lightgrey",
    width: "25%",
  },
});
