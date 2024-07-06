import React from "react"
import { Tabs } from "expo-router"
import { TabBarIcon } from "@/components/TabBarIcon"
import { CreateTask } from "@/components/CreateTask"

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            backgroundColor: "transparent",
            borderTopColor: "transparent",
            shadowColor: "transparent",
          },
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Tasks",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "today" : "today-outline"}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
      </Tabs>

      <CreateTask className="absolute bottom-28 right-6" />
    </>
  )
}
