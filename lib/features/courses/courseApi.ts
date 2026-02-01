import { ApiResponse } from "@/types/ApiResponse";
import { Course, Lesson } from "@/types/Course";
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
  tagTypes: ["Course", "TutorCourse"],

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

    getTutorCourses: builder.query<ApiResponse<Course[]>, void>({
      query: () => "/tutor/courses",
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

    // GET SINGLE COURSE DETAILS
    getCourseById: builder.query<ApiResponse<Course>, string>({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),
    // GET SINGLE COURSE DETAILS
    getCourseDetailById: builder.query<Course, string>({
      query: (id) => `public/${id}`,
    }),

    // CREATE A NEW COURSE (Mutation)
    createCourse: builder.mutation<ApiResponse<Course>, Partial<Course>>({
      query: (newCourse) => ({
        url: "/tutor/makecourse",
        method: "POST",
        body: newCourse,
      }),
    }),
    // ADD LESSON
    addLesson: builder.mutation<
      ApiResponse<Lesson>,
      { id: string; lesson: Lesson }
    >({
      query: ({ id, lesson }) => ({
        url: `/${id}/lesson`,
        method: "POST",
        body: lesson,
      }),
    }),
    deleteCourse: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `/tutor/course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Course", id },
        { type: "Course", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetPopularCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useGetTutorCoursesQuery,
  useAddLessonMutation,
  useGetCourseDetailByIdQuery,
  useDeleteCourseMutation,
} = coursesApi;
