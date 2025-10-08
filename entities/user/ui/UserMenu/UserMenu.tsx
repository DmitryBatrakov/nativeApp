import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "../../model/user.model";
import { Colors, Fonts, Gaps } from "../../../../shared/tokens";

export function UserMenu({ user }: { user: User | null}) {
    
    if( !user ) return;
    
    return (
        <View style={styles.container}>
            {user.photo ? (
                <Image
                    style={styles.image}
                    source={{
                        uri: user.photo,
                    }}
                />
            ) : (
                <Image
                    source={require("../../../../assets/images/avatar.png")}
                />
            )}
            <Text style={styles.name} >{user.name} {user.surname}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: Gaps.g8,
        marginTop: 30,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    name:{
        color: Colors.white,
        fontSize: Fonts.f18,
        fontFamily: Fonts.regular,
    },
});
