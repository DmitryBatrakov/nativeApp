import {  Dimensions, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "./shared/input/input";
import { Colors, Gaps } from "./shared/tokens";
import { Button } from "./shared/Button/Button";

export default function App() {
    const width = Dimensions.get('window').width
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.div}>
                    <Image 
                        source={require("./assets/logo.png")} 
                        style={styles.logo}
                        resizeMode="contain"    
                    />
                </View>
                <View style={styles.form}>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Button text='Войти'/>
                </View>
                <Text>Восстановить пароль</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 55,
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        alignItems: "center",
        gap: Gaps.g50,
    },
    form: {
        alignSelf: "stretch",
        gap: Gaps.g16,
    },
    logo: {
        width: 200
    },
    div: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 600,
    }
});
