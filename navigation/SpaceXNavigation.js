import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";
import HomeSpaceX from "../src/screens/HomeSpaceX";
import Launch from "../src/screens/Launch";

const Stack = createStackNavigator();

export default function SpaceXNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeSpaceX" component={HomeSpaceX} />
      <Stack.Screen name="Launch" component={Launch} />
    </Stack.Navigator>
  );
}
