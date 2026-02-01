import { User } from "@/types/TypesAll"; // Ensure Course is imported too
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/`,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signup: builder.mutation<any, Partial<User>>({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    loadUser: builder.query<{ success: boolean; user: User }, void>({
      query: () => "/me",
      providesTags: ["User"],
    }),
    getUserProfile: builder.query<User, void>({
      query: () => "80834fcd-ec2c-4350-abf4-8f433c593327",
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLoadUserQuery,
  useLogoutMutation,
  useGetUserProfileQuery,
} = userApi;
