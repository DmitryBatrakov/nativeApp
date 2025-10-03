import { Link } from "expo-router";
import { Image, SafeAreaViewBase, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Gaps } from "../shared/tokens";
import { StyledLink } from "../shared/Link/StyledLink";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UnmatchedCustom() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require("../assets/images/unmatched.png")}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.text}>
                    Ооо... что-то пошло не так. Попробуйте вернуться на главный
                    экран приложения
                </Text>
                <StyledLink href={"/"} text={"На главный экран"} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 55,
    },
    content: {
        alignItems: "center",
        gap: Gaps.g50,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f18,
        fontFamily: Fonts.regular,
        textAlign: "center",
    },
    image: {
        width: 204,
        height: 282,
    },
});
