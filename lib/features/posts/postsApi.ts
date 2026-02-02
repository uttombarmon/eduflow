import { Post } from "@/types/Post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: "Post" as const, id })),
                        { type: "Post", id: "LIST" },
                    ]
                    : [{ type: "Post", id: "LIST" }],
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
