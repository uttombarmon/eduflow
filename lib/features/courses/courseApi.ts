import { CourseDetail } from "@/types/CoursesTypes";
import { PopularCourse } from "@/types/PopularCourseTypes";
import { Course, ApiResponse, Lesson } from "@/types/TypesAll";
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
  tagTypes: ["Course"],

  endpoints: (builder) => ({
    // GET ALL COURSES by pagination
    getCourses: builder.query<ApiResponse<CourseDetail[]>, void>({
      query: () => "/getcourses?page=1&limit=12",
    }),
    getCourseByEnrolled: builder.query<ApiResponse<CourseDetail[]>, void>({
      query: () => "enrolled/courses?limit=12&page=1",
    }),

    // GET tutor COURSES
    getTutorCourses: builder.query<ApiResponse<Course[]>, void>({
      query: () => "/tutor/courses",
    }),
    // GET POPULAR COURSES
    getPopularCourses: builder.query<ApiResponse<PopularCourse[]>, void>({
      query: () => "/popular?limit=8",
    }),

    // GET SINGLE COURSE DETAILS
    getCourseById: builder.query<ApiResponse<Course>, string>({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),
    // GET SINGLE COURSE DETAILS
    getCourseDetailById: builder.query<CourseDetail, string>({
      query: (id) => `public/${id}`,

    }),

    // CREATE A NEW COURSE (Mutation)
    createCourse: builder.mutation<ApiResponse<Course>, Partial<Course>>({
      query: (newCourse) => ({
        url: "/tutor/makecourse",
        method: "POST",
        body: newCourse,
      })
    })
    ,
    // ADD LESSON
    addLesson: builder.mutation<ApiResponse<Lesson>, { id: string, lesson: Lesson }>({
      query: ({ id, lesson }) => ({
        url: `/${id}/lesson`,
        method: "POST",
        body: lesson,
      })
    })
  })
});

export const { useGetCoursesQuery, useGetPopularCoursesQuery, useGetCourseByIdQuery, useCreateCourseMutation, useGetTutorCoursesQuery, useAddLessonMutation, useGetCourseDetailByIdQuery } = coursesApi;
