import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { Button } from "../../shared/Button/Button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../entities/auth/model/auth.state";

export default function MyCourses() {
    const logout = useSetAtom(logoutAtom);

    return (
        <View>
            <Text>Index</Text>
            <Button text="Logout" onPress={logout} />
        </View>
    );
}
// import { View, Button, Text } from "react-native";
// import { useNavigation } from "expo-router";
// import { DrawerActions } from "@react-navigation/native";
// import { useDrawerStatus } from "@react-navigation/drawer";

// export default function Index() {
//     const nav = useNavigation();
//     const status = useDrawerStatus();

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 12,
//             }}
//         >
//             <Text style={{ color: "black" }}>drawer status: {status}</Text>
//             <Button
//                 title="OPEN (dispatch)"
//                 onPress={() => nav.dispatch(DrawerActions.openDrawer())}
//             />
//             <Button
//                 title="Close (dispatch)"
//                 onPress={() => nav.dispatch(DrawerActions.closeDrawer())}
//             />
//         </View>
//     );
// }
