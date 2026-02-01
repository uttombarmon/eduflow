import { Course } from "./Course";
import { User } from "./User";

export interface PopularCourse extends Course {
  instructor: Partial<User>;
  _count: number;
}
