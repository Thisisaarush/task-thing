import React from "react"
import { Link, Tabs } from "expo-router"

import { TabBarIcon } from "@/components/TabBarIcon"
import { Platform, View } from "react-native"

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            marginBottom: 30,
            paddingBottom: 0,
            backgroundColor: "white",

            width: "90%",
            height: 70,
            marginHorizontal: "auto",
            borderRadius: 50,
            position: "relative",
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

      <Link
        href={"/createTask"}
        className={`absolute bottom-20 ${
          Platform.OS === "android" ? "-ml-[34px]" : ""
        } left-1/2 -translate-x-1/2`}>
        <View className="rounded-full bg-white p-1">
          <TabBarIcon name="add-circle" color={"black"} size={60} />
        </View>
      </Link>
    </>
  )
}
