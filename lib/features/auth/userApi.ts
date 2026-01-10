import { User } from "@/types/TypesAll"; // Ensure Course is imported too
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://mocki.io/v1/",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    getUserProfile: builder.query<User, void>({
      query: () => "80834fcd-ec2c-4350-abf4-8f433c593327",
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
