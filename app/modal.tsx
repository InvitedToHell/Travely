import { View } from "@/components/Themed";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet, Switch, Text } from "react-native";

export default function ModalScreen() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
      backgroundColor: colors.background,
      paddingTop: 20,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text style={styles.title}>General</Text>
        <View
          style={styles.separator}
          lightColor={colors.text}
          darkColor={colors.text}
        />
        <Switch></Switch>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </ScrollView>
  );
}
