import { Course } from "@/types/TypesAll";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialCourses {
  courses: Course[];
}
const initialCoursesState: InitialCourses = {
  courses: [],
};
export const coursesSlice = createSlice({
  name: "courses",
  initialState: initialCoursesState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
  },
});
export const { setCourses } = coursesSlice.actions;
