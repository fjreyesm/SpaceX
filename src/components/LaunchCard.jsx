import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

export default function LaunchCard({ mission, flightn, year, url_img }) {
  console.log("en Last card props recibidas ==>" + { year });

  return (
    <TouchableWithoutFeedback>
      <View>
        <Text>TITILO CARD</Text>
        <Text>Card</Text>
        <Text>Mission Name: {mission}</Text>
        <Text>Mission Year: {year}</Text>
        <Text>Flight Number:{flightn} </Text>
        <Image source={{ uri: url_img }} style={{ width: 80, height: 80 }} />
      </View>
    </TouchableWithoutFeedback>
  );
}
