import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { getLaunchApiByFlightNumberApi } from "../api/Launches";

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
    <View>
      <Text> {details.launch_year}</Text>
      <Text> {details.mission_name}</Text>
      <Text> {details.rocket?.second_stage?.payloads[0].nationality}</Text>
      <Text> {details.launch_date_utc}</Text>
      <Text> Rocket: {details.rocket?.rocket_name}</Text>
      <Text> Rocket Type: {details.rocket?.rocket_type}</Text>
      <Text> {details.launch_success ? "Success" : "Failure"}</Text>
      <Text> Site Name {details.launch_site?.site_name_long}</Text>
    </View>
  );
}
