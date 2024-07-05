import React from "react"
import { View } from "react-native"
import { Link, Tabs } from "expo-router"
import { TabBarIcon } from "@/components/TabBarIcon"

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

      <Link href={"/createTask"} className={`absolute bottom-28 right-6`}>
        <View className="rounded-full bg-black p-4 shadow-sm">
          <TabBarIcon name="add" color={"white"} size={35} />
        </View>
      </Link>
    </>
  )
}
