import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../shared/tokens";
import { StyledLink } from "../../../../shared/Link/StyledLink";
import { CloseDrawer } from "../../../../features/layout/ui/CloseDrower/CloseDrawer";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../auth/model/auth.state";
import { loadProfileAtom } from "../../../user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../../user/ui/UserMenu/UserMenu";
import CoursesIcon from "../../../../assets/icons/menu/courses";
import ProfileIcon from "../../../../assets/icons/menu/profile";
import {MenuItem} from "../MenuItem/MenuItem";


const MENU = [
    {text: 'Courses', icon: <CoursesIcon/>, path: '/(app)' },
    {text: 'Profile', icon: <ProfileIcon/>, path: '/profile' },
]

export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom)

    // useEffect(() => {
    //     loadProfile();
    // },[])

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scrollView}
        >
            <View style={styles.content}>
                <Text>{profile.profile?.name}</Text>
                <UserMenu user={profile.profile} />
                {MENU.map((menu) => (
                    <MenuItem
                        key={menu.path}
                        {...menu}
                        navigation={props.navigation}
                    />
                ))}
            </View>
            <View>
                <CloseDrawer navigation={props.navigation} />
            </View>
            <View style={styles.footer}>
                <StyledLink
                    text="Выход"
                    href={"/login"}
                    onPress={() => logout()}
                />
                <Image
                    source={require("../../../../assets/logo.png")}
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>
        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        flex: 1,
    },
    footer: {
        gap: 50,
        alignItems: "center",
        marginBottom: 40,
    },
    logo: {
        width: 160,
    },
});



// CustomDrawer.tsx (упрощённый)
// import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";
// import { View, Text, StyleSheet, Pressable } from "react-native";
// import { CloseDrawer } from "../../../../features/layout/ui/CloseDrower/CloseDrawer";
// import { useAtom } from "jotai";
// import { loadProfileAtom } from "../../../user/model/user.state";
// import { useEffect } from "react";

// export default function CustomDrawer(props: DrawerContentComponentProps) {
//     // const [profile, loadProfile] = useAtom(loadProfileAtom);

//     //     useEffect(() => {
//     //         loadProfile();
//     //     },[])

//     return (
//         <DrawerContentScrollView
//             {...props}
//             style={styles.drawer} // фон панели
//             contentContainerStyle={styles.container} // ВАЖНО: flexGrow, НЕ flex:1
//         >
//             <View>
//                 {/* <Text style={styles.item}>{profile.profile?.name}</Text> */}
//             </View>
//             <View style={styles.content}>
//                 <Text style={styles.title}>Menu</Text>

//                 <CloseDrawer navigation={props.navigation} />

//                 <Pressable
//                     onPress={() => {
//                         props.navigation.navigate("index");
//                         props.navigation.closeDrawer();
//                     }}
//                 >
//                     <Text style={styles.item}>Мои курсы</Text>
//                 </Pressable>

//                 <Pressable
//                     onPress={() => {
//                         /* пример перехода на другой путь: */ /* router.push('/profile'); */ props.navigation.closeDrawer();
//                     }}
//                 >
//                     <Text style={styles.item}>Профиль</Text>
//                 </Pressable>
//             </View>
//         </DrawerContentScrollView>
//     );
// }

// const styles = StyleSheet.create({
//   drawer: { flex: 1, backgroundColor: "#111" },
//   container: { flexGrow: 1, padding: 16 },   // <— именно flexGrow
//   content: { gap: 16 },
//   title: { color: "white", fontSize: 18, marginBottom: 8 },
//   item: { color: "white", fontSize: 16 },
// });
