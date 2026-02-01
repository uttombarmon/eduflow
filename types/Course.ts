import { LessonProgress, Quiz } from "./Progress";

export type CourseStatus = "publish" | "draft" | "archive";
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  totalDuration: string;
  level: string;
  price: number;
  rating: number;
  studentsCount: number;
  status: CourseStatus;
  createdAt: string;
  updatedAt: string;
  instructorId: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  content: string;
  order: number;
  courseId: string;
  quizzes?: Quiz[];
  lessonProgress?: LessonProgress[];
}
export interface CourseDetail extends Course {
  instructor: {
    id: string;
    avatar: string | null;
    name: string;
    role: string;
  };
  lessons: Lesson[];
}
