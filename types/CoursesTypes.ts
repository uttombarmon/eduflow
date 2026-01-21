import { PopularCourse } from "./PopularCourseTypes";

export interface CourseDetail extends PopularCourse {
    description: string;
    level: string;
    totalDuration: string;
    updatedAt: string;
    createdAt?: string;
    instructorId?: string;
    status?: string;
    studentsCount?: number;
    _count: {
        lessons: number;
        enrollments: number;
    };
}