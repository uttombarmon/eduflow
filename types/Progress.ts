import { Course } from "./Course";

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  lastAccessed: string;
  createdAt: string;
  course?: Course;
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  isCompleted: boolean;
  completedAt: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}
