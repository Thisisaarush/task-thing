import { useState } from "react"
import Checkbox from "expo-checkbox"
import { Text, View } from "react-native"

interface TaskProps {
  text: string
}

export const Task: React.FC<TaskProps> = ({ text }) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <View className="m-2 flex flex-col gap-4 rounded-md bg-white p-4">
      <View className="flex flex-row items-center justify-between">
        <View className={`flex flex-row items-center gap-4`}>
          <Checkbox
            value={isChecked}
            onValueChange={() => setChecked(!isChecked)}
            color={isChecked ? "gray" : "gray"}
            onChange={() => {
              console.log("Checkbox changed", isChecked)
            }}
          />
          <Text
            className={`line-clamp-1 w-[80%] text-lg ${isChecked ? "text-gray-400 line-through" : ""}`}>
            {text}
          </Text>
        </View>
        <Text className={`text-sm ${isChecked ? "text-gray-400 line-through" : "text-blue-600"}`}>
          Today
        </Text>
      </View>
    </View>
  )
}
