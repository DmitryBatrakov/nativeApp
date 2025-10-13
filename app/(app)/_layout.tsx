// import "react-native-gesture-handler";
// import { Redirect } from "expo-router";
// import { Drawer } from "expo-router/drawer";
// import { useAtomValue } from "jotai";
// import { authAtom } from "../../entities/auth/model/auth.state";
// import { Colors, Fonts } from "../../shared/tokens";
// import { MenuButton } from "../../features/layout/ui/MenuButton/MenuButton";
// import CustomDrawer from "../../entities/layout/ui/CustomDrawer/CustomDrawer";
// import { Pressable, Text } from "react-native";
// import { DrawerActions } from "@react-navigation/native";

// export default function AppLayout() {
//     // const { access_token } = useAtomValue(authAtom);
//     // if (!access_token) {
//     //     return <Redirect href="/login" />;
//     // }

//     return (
//         <Drawer
//             // drawerContent={(p) => <CustomDrawer {...p} />} // уже выключено
//             screenOptions={({ navigation }) => ({
//                 headerShown: true,
//                 headerLeft: () => (
//                     <Pressable
//                         onPress={() =>
//                             navigation.dispatch(DrawerActions.openDrawer())
//                         }
//                         style={{ paddingHorizontal: 12 }}
//                     >
//                         <Text style={{ color: "white" }}>Open</Text>
//                     </Pressable>
//                 ),

//                 drawerType: "front",
//                 drawerPosition: "left",
//                 drawerStyle: { width: 300, backgroundColor: "white" },
//                 overlayColor: "rgba(0,0,0,0.35)",
//                 swipeEnabled: true,
//                 swipeEdgeWidth: 80,
//                 sceneContainerStyle: { backgroundColor: "white" },
//             })}
//         >
//             <Drawer.Screen name="index" options={{ title: "Мои курсы" }} />
//         </Drawer>
//     );
// }

// import { Drawer } from "expo-router/drawer";
// import { Redirect } from "expo-router";
// import { Pressable, Text } from "react-native";
// import { DrawerActions } from "@react-navigation/native";

// const authed = true; // временно

// export default function AppLayout() {
//     if (!authed) return <Redirect href="/login" />;

//     return (
//         <Drawer
//             defaultStatus="closed"
//             screenOptions={({ navigation }) => ({
//                 headerShown: true,
//                 headerLeft: () => (
//                     <Pressable
//                         onPress={() =>
//                             navigation.dispatch(DrawerActions.openDrawer())
//                         }
//                         style={{ paddingHorizontal: 12 }}
//                     >
//                         <Text style={{ color: "white" }}>Open</Text>
//                     </Pressable>
//                 ),

//                 // КРИТИЧЕСКОЕ — чтобы Drawer был НАД контентом и явно виден:
//                 drawerType: "front",
//                 drawerPosition: "left",
//                 drawerStyle: { width: 320, backgroundColor: "red" }, // броский фон
//                 overlayColor: "rgba(0,0,0,0.5)", // затемнение
//                 swipeEnabled: true,
//                 swipeEdgeWidth: 100,

//                 // Никаких zIndex/overflow у сцены:
//                 sceneContainerStyle: { backgroundColor: "white" },
//             })}
//         >
//             <Drawer.Screen name="index" options={{ title: "Test" }} />
//         </Drawer>
//     );
// }

//=================================MAIN=======================================
import "react-native-gesture-handler";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { Colors, Fonts } from "../../shared/tokens";
import { MenuButton } from "../../features/layout/ui/MenuButton/MenuButton";
import {CustomDrawer} from "../../entities/layout/ui/CustomDrawer/CustomDrawer";
import { Pressable, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";

export default function AppLayout() {
    // const { access_token } = useAtomValue(authAtom);
    
    // if (!access_token) {
    //     return <Redirect href="/login" />;
    // }

    return (
        <Drawer
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={({ navigation }) => ({

                headerStyle: {
                    backgroundColor: Colors.blackLight,
                    shadowColor: Colors.blackLight,
                    shadowOpacity: 0,
                },
                headerLeft: () => <MenuButton navigation={navigation} />,
                headerTitleStyle: {
                    color: Colors.white,
                    fontFamily: "FiraSans",
                    fontSize: Fonts.f20,
                },
                headerTitleAlign: "center",
                sceneContainerStyle: {
                    backgroundColor: Colors.black,
                },
            })}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: "Мои курсы",
                }}
            />
        </Drawer>
    )
}
