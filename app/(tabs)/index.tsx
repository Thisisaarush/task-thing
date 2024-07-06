import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Task } from "@/components/Task"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex flex-col gap-4 p-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-medium">Today</Text>
          <Ionicons name="filter" size={28} />
        </View>
      </View>

      <Task text="task title" />
    </SafeAreaView>
  )
}
