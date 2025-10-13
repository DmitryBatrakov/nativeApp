import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { ReactNode, useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";

type Nav = DrawerContentComponentProps["navigation"];

interface MenuItemProps {
    navigation: Nav;
    icon: ReactNode;
    text: string;
    path: string;
}

export function MenuItem({
    navigation,
    icon,
    text,
    path,
    ...props}: MenuItemProps & PressableProps) {

        const [clicked, setClicked] = useState<boolean>(false);

    return (
        <Pressable 
            {...props}
            onPress={() => navigation.navigate(path)}   
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
        >
            <View>
                {icon}
                <Text>{text}</Text>   
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
})