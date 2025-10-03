import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function AppLayout() {
    return (
            <Stack>
                <Stack.Screen name="index" />
            </Stack>
    );
}
