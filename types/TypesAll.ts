export type UserRole = "student" | "tutor" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  content: string;
  isCompleted: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  description: string;
  thumbnail: string;
  category: string;
  price: number;
  rating: number;
  studentsCount: number;
  lessons: Lesson[];
  progress?: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
}

export interface Notification {
  id: string;
  message: string;
  type: "info" | "success" | "warning";
  time: string;
}
