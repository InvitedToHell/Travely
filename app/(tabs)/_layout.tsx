import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ThemeProvider, useTheme } from "@react-navigation/native";
import { Link, Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

import TravelyThemeDark from "@/assets/TravelyThemeDark";
import TravelyThemeLight from "@/assets/TravelyThemeLight";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return (
    <MaterialIcons
      size={28}
      style={{ marginBottom: -3, color: props.color }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? TravelyThemeDark : TravelyThemeLight}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="MapScreen"
          options={{
            title: "Map",
            tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="home-filled" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="account-circle" color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <MaterialIcons
                      name="settings"
                      size={25}
                      color={colors.text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
