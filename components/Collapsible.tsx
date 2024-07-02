import { PropsWithChildren, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center, gap-2"
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View className="mt-2 ml-6">{children}</View>}
    </View>
  )
}
