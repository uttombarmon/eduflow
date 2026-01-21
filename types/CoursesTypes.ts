import { PopularCourse } from "./PopularCourseTypes";

export interface CourseDetail extends PopularCourse {
    description: string;
    level: string;
    totalDuration: string;
    updatedAt: string;
    _count: {
        lessons: number;
        students: number;
    };
    instructor: {
        name: string;
        avatar: string | null;
        bio?: string;
    };
}