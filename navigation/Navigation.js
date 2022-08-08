import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SpaceX from "../components/SpaceX";
import Favorite from "../components/Favorite";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SpaceX" component={SpaceX} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
}
