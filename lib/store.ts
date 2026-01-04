import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./features/UIslice";
import { authSlice } from "./features/auth/AuthSlice";
import { categoriesSlice } from "./features/courses/CategoriesSlice";
import { filterSlice } from "./features/courses/FiltersSlice";
import { coursesSlice } from "./features/courses/CoursesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
      auth: authSlice.reducer,
      categories: categoriesSlice.reducer,
      filters: filterSlice.reducer,
      course: coursesSlice.reducer,
    },
  });
};

// Store instance type
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
