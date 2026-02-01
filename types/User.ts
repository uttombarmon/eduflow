import { Course } from "./Course";

export type UserRole = "student" | "tutor" | "admin";

export interface User {
  id: string;
  name?: string | null;
  email: string;
  role: UserRole;
  avatar?: string | null;
  createdAt: string;
  profile?: Profile;
  authoredCourses?: Course[];
  enrollments?: Course[];
}
export interface Profile {
  id: string;
  bio?: string | null;
  headline?: string | null;
  skills: string[];
  hobbies: string[];
  location?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  userId: string;
  updatedAt: string;

  experiences?: Experience[];
  projects?: Project[];
  educations?: Education[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
  profileId: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string | null;
  link?: string | null;
  githubLink?: string | null;
  technologies: string[];
  profileId: string;
}

export interface Education {
  id: string;
  school: string;
  degree?: string | null;
  fieldOfStudy?: string | null;
  startDate: string;
  endDate?: string | null;
  profileId: string;
}
