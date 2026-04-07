import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { uiSlice } from "./features/UIslice";
import { authSlice } from "./features/auth/AuthSlice";
import { userApi } from "./features/auth/userApi";
import { categoriesSlice } from "./features/courses/CategoriesSlice";
import { coursesSlice } from "./features/courses/CoursesSlice";
import { filterSlice } from "./features/courses/FiltersSlice";
import { coursesApi } from "./features/courses/courseApi";
import { lessonApi } from "./features/courses/lessons/lessonApi";
import { dashboardUISlice } from "./features/dashboard/dashboardUISlice";
import { profileApi } from "./features/dashboard/settings/profileApi";
import { studentApi } from "./features/dashboard/student/studentApi";
import { tutorApi } from "./features/dashboard/tutor/tutorApi";
import { postsApi } from "./features/posts/postsApi";
export const makeStore = () => {
  return configureStore({
    reducer: {
      // RTK Query: Handles Server State (Data from Backend)
      [coursesApi.reducerPath]: coursesApi.reducer,
      [postsApi.reducerPath]: postsApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [profileApi.reducerPath]: profileApi.reducer,
      [lessonApi.reducerPath]: lessonApi.reducer,
      [tutorApi.reducerPath]: tutorApi.reducer,
      [studentApi.reducerPath]: studentApi.reducer,
      // Slices: Handles Client State (UI/Interactions)
      ui: uiSlice.reducer,
      auth: authSlice.reducer,
      categories: categoriesSlice.reducer,
      filters: filterSlice.reducer,
      course: coursesSlice.reducer,
      dashboardUI: dashboardUISlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, and polling
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(coursesApi.middleware)
        .concat(postsApi.middleware)
        .concat(userApi.middleware)
        .concat(profileApi.middleware)
        .concat(lessonApi.middleware)
        .concat(tutorApi.middleware)
        .concat(studentApi.middleware),
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
