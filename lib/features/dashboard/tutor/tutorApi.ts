import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tutorApi = createApi({
  reducerPath: "tutorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/tutor/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getTutorDashboard: builder.query<any, void>({
      query: () => "dashboard",
    }),
  }),
});

export const { useGetTutorDashboardQuery } = tutorApi;