import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { MOCK_COURSES } from "@/constants/mock-data";
import Link from "next/link";

function Courses() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Popular Courses
            </h2>
            <p className="text-slate-500 mt-2">
              Join 120,000+ students learning on EduFlow.
            </p>
          </div>
          <Link
            href={"/courses"}
            className="hidden sm:flex items-center text-sm font-semibold hover:underline"
          >
            Browse all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_COURSES.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
            // onClick={onStart}
            >
              <div className="aspect-video bg-slate-100 relative">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  height={700}
                  width={700}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 truncate">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span className="text-sm font-bold">{course.rating}</span>
                  <span className="text-slate-300 mx-1">•</span>
                  <span className="text-sm text-slate-500">
                    {course.instructor}
                  </span>
                </div>
                <button className="w-full inline-flex h-10 items-center justify-center rounded-md border border-slate-900 text-sm font-medium transition-colors hover:bg-slate-900 hover:text-white">
                  Enroll for ${course.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
