import { Text, View } from "react-native";
import { Colors } from "../../../shared/tokens";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

export default function CoursePage() {
    const { alias } = useLocalSearchParams();

    return (
            <View>
                <Text style={{ color: Colors.white }}>{alias}</Text>
            </View>
    );
}
