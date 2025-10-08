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

export default function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom)

    useEffect(() => {
        loadProfile();
    },[])

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scrollView}
            
        >
            <View style={styles.content}>
                <CloseDrawer navigation={props.navigation} />
                <Text>{profile.profile?.name}</Text>
                <UserMenu  user={profile.profile} />
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
