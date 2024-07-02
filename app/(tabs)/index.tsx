import { TabBarIcon } from "@/components/TabBarIcon"
import { Link } from "expo-router"
import { View, Text, SafeAreaView } from "react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView className="min-h-screen ">
      <Text>task thingggg</Text>
      {/* <Link href={"/createTask"} className="absolute right-8 bottom-40 ">
        <TabBarIcon name="add-circle" color={"black"} size={50} />
      </Link> */}
    </SafeAreaView>
  )
}
