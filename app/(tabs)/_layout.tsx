import { Tabs } from "expo-router";
import CustomTabBar from "@/components/CustomTabBar";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" options={{ title: "home" }} />
      <Tabs.Screen name="yoloPay" options={{ title: "yolo pay" }} />
      <Tabs.Screen name="ginie" options={{ title: "ginie" }} />
    </Tabs>
  );
}
