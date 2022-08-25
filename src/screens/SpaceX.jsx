import React from "react";
import { ScrollView } from "react-native-virtualized-view";
import { useState, useEffect } from "react";
import { getLaunchesApi } from "../api/Launches";
import LaunchsList from "../components/LaunchsList";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function HomeSpaceX() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    (async () => {
      await loadLaunchs();
    })();
  }, []);

  const loadLaunchs = async () => {
    try {
      const result = await getLaunchesApi();

      const launchsArray = [];
      result.map((launch) => {
        launchsArray.push({
          id: launch.flight_number,
          mission_name: launch.mission_name,
          flight_number: launch.flight_number,
          launch_year: launch.launch_year,
          rocket_name: launch.rocket.rocket_name,
          rocket_type: launch.rocket.rocket_type,
          url_img: launch.links.mission_patch_small,
          orbit: launch.rocket.second_stage.payloads[0].orbit,
          payload_type: launch.rocket.second_stage.payloads[0].payload_type,
          manufacturer: launch.rocket.second_stage.payloads[0].manufacturer,

          reference_system:
            launch.rocket.second_stage.payloads[0].orbit_params
              .reference_system,
        });
      });
      setLaunches([...launches, ...launchsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      {launches.map((item) => (
        <LaunchsList key={uuidv4()} item={item} />
      ))}
    </ScrollView>
  );
}
