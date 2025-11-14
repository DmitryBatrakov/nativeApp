import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Input } from "../shared/input/input";
import { Colors, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button/Button";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { StyledLink } from "../shared/Link/StyledLink";
import { loginAtom } from "../entities/auth/model/auth.state";
import { useAtom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useScreenOrientation } from "../shared/hooks";
import { Orientation } from "expo-screen-orientation";

export default function Login() {
    const [localError, setLocalError] = useState<string | undefined>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);
    const orientation = useScreenOrientation();

    console.log(orientation);

    const submit = () => {
        if (!email) {
            setLocalError("Email error");
            return;
        }
        if (!password) {
            setLocalError("Password error");
        }

        login({ email, password });
    };
    useEffect(() => {
        if (error) {
            setLocalError(error);
        }
    }, [error]);

    useEffect(() => {
        if (access_token) {
            router.replace("/(app)");
        }
    }, [access_token]);

    return (
        <View style={styles.container}>
            <ErrorNotification error={localError} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "padding"}
                // behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.content}
            >
            {/* <View style={styles.content}> */}
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <View
                        style={{
                            ...styles.inputs,
                            flexDirection:
                                orientation === Orientation.PORTRAIT_UP
                                    ? "column"
                                    : "row",
                        }}
                    >
                        <Input
                            style={{
                                width:
                                    orientation === Orientation.PORTRAIT_UP
                                        ? "auto"
                                        : Dimensions.get("window").width / 2 -
                                          14 -
                                          48,
                            }}
                            placeholder="Email"
                            onChangeText={setEmail}
                        />
                        <Input
                            style={{
                                width:
                                    orientation === Orientation.PORTRAIT_UP
                                        ? "auto"
                                        : Dimensions.get("window").width / 2 -
                                          14 -
                                          48,
                            }}
                            isPassword
                            placeholder="Password"
                            onChangeText={setPassword}
                        />
                    </View>
                    <Button
                        text="Войти"
                        onPress={submit}
                        isLoading={isLoading}
                    />
                </View>
                <StyledLink href={"/restore"} text={"Восстановить пароль"} />

                </KeyboardAvoidingView>
            {/* </View> */}
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
        // width: Platform.OS === 'ios' ? 170 : 220,
        width: Platform.select({ ios: 170, android: 220 }),
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
    inputs: {
        gap: Gaps.g16,
    },
});
