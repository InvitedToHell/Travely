import { Text, View } from "@/components/Themed";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

const username = "Nils Mustermann";

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
    image: {
      width: 100, // Set to desired width
      height: 100, // Set to desired height
      borderRadius: 50,
      backgroundColor: "#0553",
    },
  });

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.title}>{username}</Text>
      </View>
    </ScrollView>
  );
}
