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
      query: () => "febb8918-62c1-4b24-b00f-89b351a23e74",
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
