import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tutorApi = createApi({
  reducerPath: "tutorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL as string}/api/v1/tutor/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getTutorDashboard: builder.query<any, void>({
      query: () => "dashboard",
    }),
  }),
});

export const { useGetTutorDashboardQuery } = tutorApi;
