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
    signup: builder.mutation({
      query: (userData) => ({
        url: "signup",
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
    }),
    checkAuth: builder.mutation({
      query: () => ({
        url: "me",
        method: "GET",
        credentials: "include",
      }),

    }),
    getUserProfile: builder.query<User, void>({
      query: () => "80834fcd-ec2c-4350-abf4-8f433c593327",
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCheckAuthMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
} = userApi;
