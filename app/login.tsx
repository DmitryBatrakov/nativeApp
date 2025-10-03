import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../shared/input/input";
import { Colors, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button/Button";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { useState } from "react";
import { Link } from "expo-router";
import { StyledLink } from "../shared/Link/StyledLink";

export default function Login() {
    const [error, setError] = useState<string | undefined>();
    console.log("demo");

    const alert = () => {
        setError("Error pass or login");
        setTimeout(() => {
            setError(undefined);
        }, 4000);
    };

    return (
        <View style={styles.container}>
            <ErrorNotification error={error} />
            <View style={styles.content}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email" />
                    <Input isPassword placeholder="Password" />
                    <Button text="Войти" onPress={alert} />
                </View>
                <StyledLink href={"/app"} text={'Восстановить пароль'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 55,
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        alignItems: "center",
        gap: Gaps.g50,
    },
    form: {
        alignSelf: "stretch",
        gap: Gaps.g16,
    },
    logo: {
        width: 170,
    },
    div: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: Colors.link,
        fontSize: 18,
        fontWeight: 600,
    },
});
