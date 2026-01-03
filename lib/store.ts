import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./features/UIslice";
import { authSlice } from "./features/auth/AuthSlice";
import { categoriesSlice } from "./features/courses/CategoriesSlice";
import { filterSlice } from "./features/courses/FiltersSlice";
import { coursesSlice } from "./features/courses/CoursesSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    categories: categoriesSlice.reducer,
    filters: filterSlice.reducer,
    course: coursesSlice.reducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
