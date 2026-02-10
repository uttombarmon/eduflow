import { Profile } from "@/types/User";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL as string}/api/v1/profile`,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<Profile, string>({
      query: (id: string) => `/${id}`,
      providesTags: ["Profile"],
    }),
  }),
});
export const { useGetUserProfileQuery } = profileApi;
