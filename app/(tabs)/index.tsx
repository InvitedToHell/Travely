import { View } from "@/components/Themed";
import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

export default function ProfileScreen() {
  let colorScheme = useColorScheme();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 55,
      backgroundColor: colors.background,
    },
    title: {
      paddingTop: 20,
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      color: colors.text,
    },
  });

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.container}></View>
    </ScrollView>
  );
}
