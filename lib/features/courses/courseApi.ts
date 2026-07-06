import { ApiResponse } from "@/types/ApiResponse";
import { Course, CourseDetail, Lesson } from "@/types/Course";
import { PopularCourse } from "@/types/PopularCourseTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coursesApi = createApi({
  reducerPath: "coursesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/course/`,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Course", "Courses", "TutorCourse"],

  endpoints: (builder) => ({
    // GET POPULAR COURSES
    getPopularCourses: builder.query<ApiResponse<PopularCourse[]>, void>({
      query: () => "/popular?limit=6",
    }),
    // GET ALL COURSES by pagination
    getCourses: builder.query<ApiResponse<Course[]>, void>({
      query: () => "/getcourses?page=1&limit=12",
    }),
    getCourseByEnrolled: builder.query<ApiResponse<Course[]>, void>({
      query: () => "enrolled/courses?limit=12&page=1",
    }),

    getTutorCourses: builder.query<
      ApiResponse<Course[]>,
      { search?: string; status?: string; page?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: "/tutor/courses",
        params: params || { page: 1, limit: 10 },
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({
                type: "TutorCourse" as const,
                id,
              })),
              { type: "TutorCourse", id: "List" },
            ]
          : [{ type: "TutorCourse", id: "List" }],
    }),

    // GET SINGLE Tutor COURSE DETAILS
    getCourseById: builder.query<Course, string>({
      query: (id) => `${id}`,
      transformResponse: (response: Course) => {
        return response as Course;
      },
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),
    // GET SINGLE COURSE DETAILS
    getCourseDetailById: builder.query<CourseDetail, string>({
      query: (id) => `/${id}/details`,
    }),

    // CREATE A NEW COURSE (Mutation)
    createCourse: builder.mutation<ApiResponse<Course>, Partial<Course>>({
      query: (newCourse) => ({
        url: "/tutor/makecourse",
        method: "POST",
        body: newCourse,
      }),
      invalidatesTags: (result) =>
        result
          ? [
              { type: "TutorCourse", id: "List" },
              { type: "TutorCourse", id: result.data?.id },
            ]
          : [{ type: "TutorCourse", id: "List" }],
    }),

    // Update Existing Course
    updateCourse: builder.mutation<
      { success: boolean; data?: Course },
      Partial<Course> & { id: string }
    >({
      query: ({ id, ...body }) => ({
        url: `/update/${id}`,
        method: "PUT", // Or "PATCH" depending on backend
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Course", id },
        { type: "Course", id: "LIST" },
      ],
    }),

    // Delete course by tutor
    deleteCourse: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `/tutor/course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "TutorCourse", id },
        { type: "TutorCourse", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetPopularCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useGetTutorCoursesQuery,
  useGetCourseDetailByIdQuery,
  useDeleteCourseMutation,
} = coursesApi;
