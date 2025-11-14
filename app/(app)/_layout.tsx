import "react-native-gesture-handler";
import { Redirect, useRootNavigationState } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { Colors, Fonts } from "../../shared/tokens";
import { MenuButton } from "../../features/layout/ui/MenuButton/MenuButton";
import { CustomDrawer } from "../../widget/layout/ui/CustomDrawer/CustomDrawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppLayout() {

    // const { access_token } = useAtomValue(authAtom);

    // console.log(access_token);

    // if (!access_token) {
    //     return <Redirect href="/login" />;
    // }

   

        return (
            <GestureHandlerRootView style={styles.wrapper}>
                <Drawer
                    drawerContent={(props) => <CustomDrawer {...props} />}
                    screenOptions={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: Colors.blackLight,
                            shadowColor: Colors.blackLight,
                            shadowOpacity: 0,
                        },
                        headerLeft: () => {
                            return <MenuButton navigation={navigation} />;
                        },
                        headerTitleStyle: {
                            color: Colors.white,
                            fontFamily: "FiraSans",
                            fontSize: Fonts.f20,
                        },
                        headerTitleAlign: "center",
                        sceneContainerStyle: {
                            backgroundColor: Colors.black,
                        },

                        swipeEnabled: true,
                        gestureEnabled: true,
                        drawerType: "front",
                    })}
                >
                    <Drawer.Screen
                        name="index"
                        options={{
                            title: "Мои курсы",
                        }}
                    />
                    <Drawer.Screen
                        name="profile"
                        options={{
                            title: "Профиль",
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})  