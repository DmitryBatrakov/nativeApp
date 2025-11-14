import "react-native-gesture-handler";
import { Stack, SplashScreen } from "expo-router";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Notification } from "../shared/Notification/Notification";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "FiraSans-Regular": require("../assets/fonts/FiraSans-Regular.ttf"),
        "FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf"),
    });

    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Notification />
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    // statusBarColor: "dark",
                    contentStyle: {
                        backgroundColor: Colors.black,
                    },
                    headerShown: false,
                }}
            >
                <Stack.Screen name="login" />
                <Stack.Screen
                    name="restore"
                    options={{
                        presentation: "modal",
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}
