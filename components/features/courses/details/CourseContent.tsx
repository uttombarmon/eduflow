import { CourseDetail } from "@/types/Course";
import Image from "next/image";

export function CourseContent({ course }: { course: CourseDetail }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Description Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Description</h2>
        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
          {course?.description || "No description provided."}
        </p>
      </section>

      {/* NEW: Course Content Overview Section */}
      <section className="pt-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">
          Course Content
        </h2>

        {course?.modules && course.modules.length > 0 ? (
          <div className="flex flex-col gap-3">
            {course.modules.map((module, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-bold text-slate-800">
                  Section {index + 1}: {module.title}
                </h3>

                {module.lessons && module.lessons.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {module.lessons.map((lesson, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-slate-600 text-sm"
                      >
                        {/* A small play icon/bullet point placeholder */}
                        <svg
                          className="w-4 h-4 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic bg-slate-50 p-4 rounded-lg border border-slate-200">
            Course curriculum will be announced soon.
          </p>
        )}
      </section>

      {/* Instructor Section */}
      <section className="pt-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Instructor</h2>
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
            {course?.instructor?.avatar ? (
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 64px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-bold text-slate-500 text-xl">
                {course?.instructor?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {course?.instructor?.name || "Unknown Instructor"}
            </h3>
            <p className="text-slate-500 text-sm mt-1 leading-relaxed max-w-2xl">
              {course?.instructor?.bio ||
                "Expert instructor specializing in this field."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
