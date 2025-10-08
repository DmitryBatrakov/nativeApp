import { use, useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotificationProps";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../tokens";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ErrorNotification({ error }: ErrorNotificationProps) {
    const [isShown, setIsShown] = useState<boolean>(false);
    const animatedValue = new Animated.Value(-100);

    const onEnter = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        })
            .start
            // () => {
            //     console.log('sdsdd');
            // }
            ();
    };

    useEffect(() => {
        if (!error) {
            return;
        }

        setIsShown(true);
        const timerId = setTimeout(() => {
            setIsShown(false);
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [error]);

    if (!isShown) {
        return <></>;
    }

    return (
        <Animated.View
            style={{
                ...styles.error,
                transform: [{ translateY: animatedValue }],
            }}
            onLayout={onEnter}
        >
            <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    error: {
        position: "absolute",
        width: Dimensions.get("screen").width,
        backgroundColor: Colors.red,
        padding: 15,
        top: 50,
    },
    errorText: {
        fontSize: Fonts.f16,
        color: Colors.white,
        textAlign: "center",
        fontFamily: "FiraSansRegular",
    },
});
