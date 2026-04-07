import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL as string}/api/v1/student/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getStudentDashboard: builder.query<any, void>({
      query: () => "dashboard",
    }),
  }),
});

export const { useGetStudentDashboardQuery } = studentApi;
