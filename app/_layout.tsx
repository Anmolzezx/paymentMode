import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";
import * as Font from "expo-font";

import { useEffect, useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const theme = useColorScheme();

  useEffect(() => {
    Font.loadAsync({
      Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
      "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
      "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
      "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
      "Poppins-LightItalic": require("../assets/fonts/Poppins-LightItalic.ttf"),
    }).then(() => setLoaded(true));
  }, []);
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
