import {
    Pressable,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import { Colors, Radius } from "../tokens";
import { useState } from "react";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import EyeClosedIcon from "../../assets/icons/eye-closed";

export function Input(props: TextInputProps & { isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <View>
            <TextInput
                style={styles.input}
                secureTextEntry={props.isPassword && !isPasswordVisible}
                placeholderTextColor={Colors.gray}
                {...props}
            />
            {props.isPassword && (
                <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setIsPasswordVisible((state) => !state)}
                >
                    {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: 16,
        color: Colors.gray,
        fontFamily: "FiraSansRegular",
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 27,
    },
});
