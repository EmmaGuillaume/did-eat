import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="progress"
        options={{
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon
            //   name={focused ? "calendar-clear" : "calendar-clear-outline"}
            //   color={focused ? "hsl(223,62%,29%)" : "hsl(223,29%,68%)"}
            // />
            <Text>Progress</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon
            //   name={focused ? "calendar-clear" : "calendar-clear-outline"}
            //   color={focused ? "hsl(223,62%,29%)" : "hsl(223,29%,68%)"}
            // />
            <Text>Index</Text>
          ),
        }}
      />
    </Tabs>
  );
}
