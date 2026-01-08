import { Course } from "@/types/TypesAll";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coursesApi = createApi({
  reducerPath: "coursesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://mocki.io/v1/",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Course"],

  endpoints: (builder) => ({
    // GET ALL COURSES
    getCourses: builder.query<Course[], void>({
      query: () => "02e4b3b6-14e6-4c08-ba1b-01e7f098466a",
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: "Course" as const, id })),
      //         { type: "Course", id: "LIST" },
      //       ]
      //     : [{ type: "Course", id: "LIST" }],
    }),

    // GET SINGLE COURSE DETAILS
    // getCourseById: builder.query<Course, string>({
    //   query: (id) => `/courses/${id}`,
    //   providesTags: (result, error, id) => [{ type: "Course", id }],
    // }),

    // CREATE A NEW COURSE (Mutation)
    // createCourse: builder.mutation<Course, Partial<Course>>({
    // query: (newCourse) => ({
    //   url: "/courses",
    //   method: "POST",
    //   body: newCourse,
    // }),
    // This tells RTK to instantly re-fetch the course list
    // invalidatesTags: [{ type: "Course", id: "LIST" }],
  }),
});

export const { useGetCoursesQuery } = coursesApi;
