import { CourseCategories } from "@/types/TypesAll";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialCoursesState: CourseCategories = {
  categories: [],
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCoursesState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});
export const { setCategories } = categoriesSlice.actions;
