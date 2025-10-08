import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../shared/input/input";
import { Colors, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button/Button";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { StyledLink } from "../shared/Link/StyledLink";
import { loginAtom } from "../entities/auth/model/auth.state";
import { useAtom } from "jotai";

export default function Login() {
    const [localError, setLocalError] = useState<string | undefined>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [{access_token, isLoading, error}, login] = useAtom(loginAtom)

    const submit = () => {
        if (!email) {
            setLocalError("Email error");
            return 
        }
        if (!password) {
            setLocalError("Password error");
        }
        login({email, password})
    }
    useEffect(() => {
        if(error) {
           setLocalError(error); 
        }
    }, [error])

    useEffect(() => {
        if (access_token) {
            router.replace("/(app)");
        }
    }, [access_token]);

    return (
        <View style={styles.container}>
            <ErrorNotification error={localError} />
            <View style={styles.content}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email"  onChangeText={setEmail}/>
                    <Input isPassword placeholder="Password" onChangeText={setPassword}/>
                    <Button text="Войти" onPress={submit} isLoading={isLoading} />
                </View>
                <StyledLink href={"/restore"} text={'Восстановить пароль'} />
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
