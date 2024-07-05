import Ionicons from "@expo/vector-icons/Ionicons"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-between p-4">
        <Text className="text-xl font-medium">Today</Text>
        <Ionicons name="filter" size={28} />
      </View>
    </SafeAreaView>
  )
}
