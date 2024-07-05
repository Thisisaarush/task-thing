import { View, Text, Platform } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function CreateTaskScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: Platform.OS === "android" ? insets.top : 0 }}>
      <Text>create task</Text>
    </View>
  )
}
