import { Link } from "expo-router"
import { View } from "react-native"
import { TabBarIcon } from "./TabBarIcon"

interface CreateButtonProps {
  href: string
  className?: string
  size?: number
}

export const CreateButton: React.FC<CreateButtonProps> = ({ href, size = 35, className }) => {
  return (
    <Link href={href} className={`${className}`}>
      <View className="rounded-full bg-black p-4 shadow-sm">
        <TabBarIcon name="add" color={"white"} size={size} />
      </View>
    </Link>
  )
}
