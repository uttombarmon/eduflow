import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lessonApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api/v1",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
        credentials: "include",
    }),
    tagTypes: ["Lesson"],
    endpoints: (builder) => ({
        // GET LESSONS
        getLessons: builder.query({
            query: (id) => `/lessons/${id}`,
            providesTags: ["Lesson"],
        }),
        // ADD LESSON
        addLesson: builder.mutation({
            query: ({ id, lesson }) => ({
                url: `/lessons/${id}`,
                method: "POST",
                body: lesson,
            }),
            invalidatesTags: ["Lesson"],
        }),
        // UPDATE LESSON
        updateLesson: builder.mutation({
            query: ({ id, lesson }) => ({
                url: `/lessons/${id}`,
                method: "PUT",
                body: lesson,
            }),
            invalidatesTags: ["Lesson"],
        }),
        // DELETE LESSON
        deleteLesson: builder.mutation({
            query: (id) => ({
                url: `/lessons/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Lesson"],
        }),
    }),
});

export const { useAddLessonMutation, useGetLessonsQuery, useUpdateLessonMutation, useDeleteLessonMutation } = lessonApi;