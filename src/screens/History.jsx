import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useState, useEffect } from "react";
import { getHistoryApi } from "../api/Launches";
import FactsList from "../components/FactsList";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function History() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    (async () => {
      await loadHistApi();
    })();
  }, []);

  const loadHistApi = async () => {
    try {
      const result = await getHistoryApi();
      setFacts([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      {facts.map((item) => (
        <FactsList key={uuidv4()} item={item} />
      ))}
    </ScrollView>
  );
}
