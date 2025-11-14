import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ImageUploader } from "../../shared/imageUploader/ImageUploadre";
import { Gaps } from "../../shared/tokens";
import { Avatar } from "../../entities/user/ui/Avatar/Avatar";
import { updateProfileAtom } from "../../entities/user/model/user.state";
import { useAtom } from "jotai";
import { Button } from "../../shared/Button/Button";
import * as Sharing from 'expo-sharing';

export default function Profile() {
    const [image, setImage] = useState<string | null>(null);
    const [profile, updateProfile] = useAtom(updateProfileAtom);

    const sharingProfile = async () => {
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if (!isSharingAvailable) {
            return;
        }
        await Sharing.shareAsync('https://purpleschool.ru', {
            dialogTitle: 'Поделиться профилем',
        })
    } 

    const submitProfile = () => {
        if (!image) {
            return;
        }
        updateProfile({ photo: image });
    };

    useEffect(() => {
        if (profile && profile.profile?.photo) {
            setImage(profile.profile?.photo);
        }
        }, [profile]);

    return (
        <View>
            <View style={styles.container}>
                <Avatar image={image} />
                <ImageUploader
                    onUpload={setImage}
                    onError={(e) => console.log(e)}
                />
            </View>
            <Button text="Сохранить" onPress={submitProfile} />
            <Button text="Сохранить" onPress={sharingProfile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: Gaps.g20,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});
