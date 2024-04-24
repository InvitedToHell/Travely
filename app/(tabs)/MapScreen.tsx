import { View } from "@/components/Themed";
import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
