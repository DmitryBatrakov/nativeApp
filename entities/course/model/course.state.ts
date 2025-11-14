import { atom } from "jotai";
import { authAtom } from "../../auth/model/auth.state";
import axios, { AxiosError } from "axios";
import { API } from "../api/api";
import { StudentCourseDescription } from "./course.model";

export const courseAtom = atom<CourseState>({
    courses: [],
    isLoading: false,
    error: null,
});

type CoursesResponse = {
    my: StudentCourseDescription[];
}

export const loadCourseAtom = atom(
    async (get) => get(courseAtom),
    async (get, set) => {
        try {
            const { access_token } = await get(authAtom);

            set(courseAtom, { 
                isLoading: true, 
                courses: [], 
                error: null 
            });
            const { data } = await axios.get<CoursesResponse>(API.my, {
                params: { studentCourse: "dontMy" },
                headers: { Authorization: `Bearer ${access_token}` },
            });
            
            set(courseAtom, {
                isLoading: false,
                courses: data.my, 
                error: null,
            });
        
        } catch (err) {
            const e = err as AxiosError<{ message?: string }>;
            set(courseAtom, {
                isLoading: false,
                courses: [],
                error: e.response?.data?.message ?? "Unknown error",
            });
        }
    }
);

export interface CourseState {
    courses: StudentCourseDescription[] ;
    isLoading: boolean;
    error: string | null;
}
