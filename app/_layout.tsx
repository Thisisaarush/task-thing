import "../styles/global.css"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import "react-native-reanimated"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
