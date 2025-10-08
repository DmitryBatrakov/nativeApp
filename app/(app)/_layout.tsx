import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { Colors, Fonts } from "../../shared/tokens";
import { MenuButton } from "../../features/layout/ui/MenuButton/MenuButton";
import CustomDrawer from "../../entities/layout/ui/CustomDrawer/CustomDrawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppLayout() {
    const { access_token } = useAtomValue(authAtom);
    if (!access_token) {
        return <Redirect href="/login" />;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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
                })}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Мои курсы",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}

// export default function AppLayout() {
//     const { access_token } = useAtomValue(authAtom);
//     if (!access_token) return <Redirect href="/login" />;

//     return (
       
//             <Drawer
//                 drawerContent={(props) => <CustomDrawer {...props} />}
//                 screenOptions={({ navigation }) => ({
//                     headerStyle: {
//                         backgroundColor: Colors.blackLight,
//                         shadowColor: Colors.blackLight,
//                         shadowOpacity: 0,
//                     },
//                     headerLeft: () => <MenuButton navigation={navigation} />,
//                     headerTitleStyle: {
//                         color: Colors.white,
//                         fontFamily: "FiraSans",
//                         fontSize: Fonts.f20,
//                     },
//                     headerTitleAlign: "center",
//                     sceneContainerStyle: { backgroundColor: Colors.black },
//                 })}
//             >
//                 <Drawer.Screen name="index" options={{ title: "Мои курсы" }} />
//             </Drawer>
        
//     );
// }
