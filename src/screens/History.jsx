import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useState, useEffect } from "react";
import { getHistoryApi } from "../api/Launches";
import FactsList from "../components/FactsList";

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
      console.log("result " + { result });
      setFacts([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Text>History Facts</Text>

      {facts.map((item) => (
        <>
          <FactsList key={item.id} item={item} />
        </>
      ))}
    </ScrollView>
  );
}
