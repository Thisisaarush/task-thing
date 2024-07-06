import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <View className="mt-10 flex flex-col gap-4">
        <View className="flex flex-col items-center justify-center gap-2">
          <Image
            source="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            placeholder="user"
            contentFit="cover"
            transition={200}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text>Aarush Tanwar</Text>
        </View>

        <View className="m-2 flex flex-col gap-4 rounded-md bg-white p-4">
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-medium">Name</Text>
            <Text className="text-lg text-gray-500">Aarush Tanwar</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-medium">Email</Text>
            <Text className="text-lg text-gray-500">example@gmail.com</Text>
          </View>
        </View>

        <Pressable
          onPress={() => alert("Pressed Delete Account")}
          className="m-2 flex flex-col gap-4 rounded-md bg-red-600 p-4">
          <Text className="text-center text-lg text-white">Delete Account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
