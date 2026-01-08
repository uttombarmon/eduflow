import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./features/UIslice";
import { authSlice } from "./features/auth/AuthSlice";
import { categoriesSlice } from "./features/courses/CategoriesSlice";
import { filterSlice } from "./features/courses/FiltersSlice";
import { coursesSlice } from "./features/courses/CoursesSlice";
import { coursesApi } from "./features/courses/courseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./features/posts/postsApi";
import { userApi } from "./features/auth/userApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // RTK Query: Handles Server State (Data from Backend)
      [coursesApi.reducerPath]: coursesApi.reducer,
      [postsApi.reducerPath]: postsApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      // Slices: Handles Client State (UI/Interactions)
      ui: uiSlice.reducer,
      auth: authSlice.reducer,
      categories: categoriesSlice.reducer,
      filters: filterSlice.reducer,
      course: coursesSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, and polling
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(coursesApi.middleware)
        .concat(postsApi.middleware)
        .concat(userApi.middleware),
  });
};
// Required for RTK Query "refetchOnFocus" and "refetchOnReconnect"
// This allows your course data to update automatically if the user leaves and comes back
const store = makeStore();
setupListeners(store.dispatch);
// Store instance type
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
