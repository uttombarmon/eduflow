import { PopularCourse } from "./PopularCourseTypes";
import { Course } from "./TypesAll";

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
export interface TutorCourse extends Course {
  id: string;
  title: string;
  instructorId: string;
  description: string;
  thumbnail: string; // URL
  category: "Mobile App Development" | string;
  totalDuration: string; // Empty string in your data, likely "HH:mm:ss"
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  status: "draft" | "publish" | "archived";
  studentsCount: number;
  createdAt: Date;
  updatedAt: Date;
}
