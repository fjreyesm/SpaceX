import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { getLaunchApiByFlightNumberApi } from "../api/Launches";
import { Button, Alert, Image } from "react-native";

export default function Launch(props) {
  const navigation = useNavigation();
  const [details, setDetails] = useState([]);

  console.log("launch parametro ");
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
      console.log("result of Lauch detail" + { result });
      setDetails(result);
      console.log("details " + { details });
    } catch (error) {
      console.log(error);
    }
  };
  // getLaunchApiByFlightNumberApi(flightNumber);
  return (
    <View style={styles.wrapper}>
      <Image source={{}} />
      <Text style={styles.title}> {details.mission_name}</Text>

      <View style={styles.subtitle}>
        <Text style={styles.text}>
          {details.rocket?.second_stage?.payloads[0].nationality}
        </Text>
        <Text> {details.launch_year}</Text>
      </View>
      <View style={styles.rocket}>
        <Text style={styles.text}>Rocket </Text>
        <Text style={styles.text}>{details.rocket?.rocket_name}</Text>
        <Text style={styles.text}>Type: {details.rocket?.rocket_type}</Text>
      </View>
      <Text style={styles.text}>
        {details.launch_success ? "Success" : "Failure"}
      </Text>

      <Text style={styles.details}> Details: {details.details}</Text>
      <View>
        <Text style={styles.text}>{details.launch_site?.site_name_long}</Text>
        <Text style={styles.text}> {details.launch_date_utc}</Text>
      </View>
      <Button
        title="Next Launch"
        type="outline"
        onPress={() => Alert.alert("Simple Button pressed")}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 20,
    height: "80%",
    justifyContent: "space-between",
  },
  items: {
    flexDirection: "column",

    margin: 10,
  },

  rocket: {
    margin: 10,
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
    width: "20%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  text: {
    marginTop: 15,
  },
});
