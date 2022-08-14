import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useState, useEffect } from "react";
import { getLaunchesApi } from "../src/api/Launches";
import LaunchsList from "./LaunchsList";

import Rocket from "./Rocket";

export default function SpaceX() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    (async () => {
      await loadLaunchs();
    })();
  }, []);

  const loadLaunchs = async () => {
    try {
      const result = await getLaunchesApi();
      console.log("result " + { result });
      const launchsArray = [];
      result.map((launch) => {
        launchsArray.push({
          mission_name: launch.mission_name,
          flight_number: launch.flight_number,
          launch_year: launch.launch_year,
          rocket_name: launch.rocket.rocket_name,
          url_img: launch.links.mission_patch_small,
        });
      });
      setLaunches([...launches, ...launchsArray]);
      console.log(" launches tipo " + typeof launches);
      console.log(" launches " + launches.length);
    } catch (error) {
      console.log(error);
    }
  };
  // <img src={launch.links.mission_patch_small} width={200} />

  return (
    <ScrollView>
      <Text>SpaceXss Screen </Text>

      {launches.map((item) => (
        <>
          <LaunchsList key={item.flight_numer} item={item} />
        </>
      ))}
    </ScrollView>
  );
}
