import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import History from "../src/screens/History";
import SpaceXNavigation from "./SpaceXNavigation";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Launches"
        component={SpaceXNavigation}
        options={{
          tabBarIcon: () => <Icon name="rocket" size={20} color="black" />,
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: () => <Icon name="image" size={20} color="blue" />,
        }}
      />
    </Tab.Navigator>
  );
}
