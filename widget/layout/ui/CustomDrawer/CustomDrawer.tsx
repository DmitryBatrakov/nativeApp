import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../shared/tokens";
import { StyledLink } from "../../../../shared/Link/StyledLink";
import { CloseDrawer } from "../../../../features/layout/ui/CloseDrower/CloseDrawer";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../../entities/auth/model/auth.state";
import { loadProfileAtom } from "../../../../entities/user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../../../entities/user/ui/UserMenu/UserMenu";
import CoursesIcon from "../../../../assets/icons/menu/courses";
import ProfileIcon from "../../../../assets/icons/menu/profile";
import { MenuItem } from "../../../../entities/layout/ui/MenuItem/MenuItem";

const MENU = [
    { text: "Мои курсы", icon: <CoursesIcon />, path: "index" },
    { text: "Профиль", icon: <ProfileIcon />, path: "profile" },
];

export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom);

    useEffect(() => {
        loadProfile();
    }, [loadProfile]);

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scrollView}
        >
            <View style={styles.content}>
                <CloseDrawer navigation={props.navigation} />
                <UserMenu user={profile.profile} />
                {MENU.map((menu) => (
                    <MenuItem key={menu.path} {...menu} drawer={props} />
                ))}
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
