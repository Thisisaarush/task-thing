import React from "react"
import { Tabs } from "expo-router"

import { TabBarIcon } from "@/components/TabBarIcon"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          marginBottom: 30,
          paddingBottom: 0,
          backgroundColor: "white",

          width: "90%",
          marginHorizontal: "auto",
          borderRadius: 50,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "today" : "today-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
