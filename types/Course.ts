export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type CourseStatus = "draft" | "publish";

// 1. Add the Category interface
export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Lesson {
  id?: string;
  title: string;
  content?: string;
  videoUrl?: string;
  duration?: number;
}

export interface CourseModule {
  id?: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id?: string;
  title: string;
  description: string;
  thumbnail: string;
  level: CourseLevel;
  price: number;
  status: CourseStatus;
  modules?: CourseModule[];
  createdAt?: string;
  updatedAt?: string;
  categoryId: string;
  category?: Category;
}
export interface CourseDetail extends Course {
  instructor?: {
    id: string;
    avatar: string | null;
    name: string;
    role: string;
  };
  lessons?: Lesson[];
  _count?: CountLesson;
}
interface CountLesson {
  lessons: number;
}

export interface Pagination {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
}
export interface CourseCategories {
  categories: string[];
}
export interface Filters {
  categorie: string;
  level: string;
  price: string;
  sortBy: string;
  search: string;
}
