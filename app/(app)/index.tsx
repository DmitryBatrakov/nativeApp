import { Text, View } from "react-native";
import { Colors } from "../../shared/tokens";
import { useAtom } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";

export default function MyCourses() {

    const [profile] = useAtom(profileAtom)

    return (
            <View>
                <Text>{profile.profile?.name}</Text>
            </View>
    )
}