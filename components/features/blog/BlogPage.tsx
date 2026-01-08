import Image from "next/image";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Area */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Insights & Resources
        </h1>
        <p className="mt-4 text-xl text-slate-500">
          The latest news, tutorials, and stories from our experts.
        </p>
      </header>

      {/* Featured Post */}
      <section className="mb-16 group cursor-pointer">
        <div className="relative h-96 w-full overflow-hidden rounded-2xl">
          <Image
            src="https://picsum.photos/seed/blog/1200/600"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={400}
            height={400}
            alt="Featured"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
            <h2 className="mt-4 text-3xl font-bold">
              The Future of AI in Modern Web Architecture
            </h2>
            <p className="mt-2 text-slate-200 max-w-lg">
              How LLMs and generative agents are changing the way we build and
              maintain complex software systems.
            </p>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <article
            key={post}
            className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="h-48 w-full overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${post}/600/400`}
                className="h-full w-full object-cover"
                alt="Post"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                Development • 5 min read
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                10 Tips for Optimizing Next.js Performance
              </h3>
              <p className="mt-3 line-clamp-3 text-slate-500 text-sm">
                From server components to partial prerendering, learn the best
                ways to keep your site fast.
              </p>
              <div className="mt-auto pt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <span className="text-sm font-medium text-slate-700">
                  Jane Doe
                </span>
                <span className="text-sm text-slate-400 ml-auto">
                  Oct 12, 2025
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
