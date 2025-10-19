import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { Colors } from "../../../../shared/tokens";
import MenuIcon from "../../../../assets/icons/menu";
import {  useState } from "react";
import { DrawerActions } from "@react-navigation/native";



export function MenuButton({ navigation, ...props }: PressableProps & { navigation: any }) {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
        <Pressable
            {...props}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
            onPress={() => {
                navigation.openDrawer();
                console.log("has openDrawer?", !!navigation.openDrawer);
            }}
            // onPress={() => navigation.toggleDrawer()}
            // onPress={() => navigation.openDrawer()}
            // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
            <View
                style={{
                    ...styles.button,
                    backgroundColor: clicked
                        ? Colors.violetDark
                        : Colors.blackLight,
                }}
            >
                <MenuIcon />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 20,
    },
});
