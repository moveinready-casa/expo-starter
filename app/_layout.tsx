import { useTheme } from "@/lib/utils/theme";
import "@expo/browser-polyfill";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { VariableContextProvider} from "react-native-css";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  // Handle dark mode class for web
  useEffect(() => {
    if (Platform.OS === "web") {
      // Type assertion for web platform where document is available
      const doc = (globalThis as any).document;
      if (doc) {
        const root = doc.documentElement;
        if (colorScheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    }
  }, [colorScheme]);


  return (
    <GestureHandlerRootView>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          title: "Expo Starter",
          headerShown: false,
          contentStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.foreground },
          headerStyle: { backgroundColor: theme.background },
        }}
      />
      <View className="dark">{children}</View>
    </GestureHandlerRootView>
  );
}
