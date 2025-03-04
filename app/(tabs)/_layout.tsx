import { router, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform, Pressable } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 4) {
      setCount(0);
      router.push("./storybook");
    }
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Pressable
              pointerEvents={focused ? "auto" : "none"}
              onPress={() => {
                if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
                  setCount((c) => c + 1);
                }
              }}
            >
              <IconSymbol size={28} name="house.fill" color={color} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
