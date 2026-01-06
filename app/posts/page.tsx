"use client";
import React from "react";
import { useGetPostsQuery } from "@/lib/features/posts/postsApi";
import { useGetCourseAllQuery } from "@/lib/features/courses/courseApi";

const PostsPage = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery();
    const { data: courses, isLoading: courseLoading, error: courseError } = useGetCourseAllQuery()
    console.log("posts: ", posts);
    console.log("courses: ", courses);
    console.log("courses error: ", courseError);
    if (isLoading || courseLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-slate-600 font-medium">
                Loading posts...
            </div>
        );
    }

    if (error || courseError) {
        return (
            <div className="min-h-screen flex justify-center items-center text-red-500 font-medium">
                Error fetching posts.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    JSONPlaceholder Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts?.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100"
                        >
                            <h2 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="text-slate-600 leading-relaxed">{post.body}</p>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between">
                                <span>User ID: {post.userId}</span>
                                <span>Post ID: {post.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostsPage;
