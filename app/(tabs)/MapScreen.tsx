import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

export default function MapScreen() {
  const [region, setRegion] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [pins, setPins] = useState<Array<Region & { key: number }>>([]);
  const [draggingPin, setDraggingPin] = useState(false);

  const handleAddPin = () => {
    const newPin = {
      ...region,
      latitudeDelta: 0,
      longitudeDelta: 0,
      key: new Date().getTime(),
    };
    setPins([...pins, newPin]);
  };

  const handleDragStart = () => {
    setDraggingPin(true);
  };

  const handleDragEnd = (e: any, pinKey: any) => {
    setDraggingPin(false);
    const newPins = pins.map((pin) => {
      if (pin.key === pinKey) {
        return {
          ...pin,
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        };
      }
      return pin;
    });
    setPins(newPins);
  };

  const handleRegionChangeComplete = (newRegion: Region) => {
    setRegion(newRegion);
  };

  const deletePin = (key: number) => {
    setPins(pins.filter((pin) => pin.key !== key));
  };

  const { colors } = useTheme();

  // Dynamically create styles that depend on `colors`
  const dynamicStyles = StyleSheet.create({
    buttonContainer: {
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: colors.background,
      borderRadius: 20,
      padding: 10,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <MapView
        style={styles.map}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        {pins.map((pin) => (
          <Marker
            key={pin.key}
            coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={(e) => handleDragEnd(e, pin.key)}
          />
        ))}
      </MapView>
      <View style={dynamicStyles.buttonContainer}>
        <MaterialIcons
          name="add"
          size={30}
          color={colors.text}
          onPress={handleAddPin}
        />
      </View>
      {draggingPin && (
        <TouchableOpacity
          style={styles.trashCanContainer}
          onPress={() => deletePin(pins[pins.length - 1].key)}
        >
          <MaterialIcons name="delete" size={50} color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  trashCanContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    height: 50,
    alignItems: "center",
  },
  trashCan: {
    width: 50,
    height: "100%",
  },
});
