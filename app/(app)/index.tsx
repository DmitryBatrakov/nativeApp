import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    StyleSheet,
    View,
} from "react-native";
import { useAtomValue, useSetAtom } from "jotai";
import {
    courseAtom,
    loadCourseAtom,
} from "../../entities/course/model/course.state";
import { useEffect } from "react";
import { CourseCard } from "../../widget/course/ui/CourseCard/CourseCard";
import { Colors, Gaps } from "../../shared/tokens";
import { StudentCourseDescription } from "../../entities/course/model/course.model";
import { Button } from "../../shared/Button/Button";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

export default function MyCourses() {
    const { isLoading, error, courses } = useAtomValue(courseAtom);
    const loadCourses = useSetAtom(loadCourseAtom);

    useEffect(() => {
        loadCourses();
    }, []);

    const allowsNotification = async () => {
        const settings = await Notifications.getPermissionsAsync();
        return (
            settings.granted ||
            settings.ios?.status ===
                Notifications.IosAuthorizationStatus.PROVISIONAL
        );
    };

    const requestPermission = async () => {
        return Notifications.requestPermissionsAsync({
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true,
            },
        });
    };

    const scheduleNotification = async () => {
        const granted = await allowsNotification();
        if (!granted) {
            await requestPermission();
        }
        if (Device.isDevice) {
            const token = await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig?.extra?.eas.projectId,
            });
            console.log(token);
            
           
        }
    };

    const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
        return (
            <View style={styles.item}>
                <CourseCard {...item} />
            </View>
        );
    };

    return (
        <>
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color={Colors.primary}
                    style={styles.activity}
                />
            )}
            <Button text="Напомнить" onPress={scheduleNotification} />
            {courses.length > 0 && (
                <FlatList
                    refreshControl={
                        <RefreshControl
                            tintColor={Colors.primary}
                            titleColor={Colors.primary}
                            refreshing={isLoading}
                            onRefresh={loadCourses}
                        />
                    }
                    data={courses}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCourse}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        gap: Gaps.g20,
        padding: 20,
    },
    item: {
        padding: 20,
    },
    activity: {
        marginTop: 30,
    },
});
