import { CourseDetail } from "@/types/CoursesTypes";

export function CourseContent({ course }: { course: CourseDetail }) {
    return (
        <>
            <section>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {course?.description}
                </p>
            </section>

            <section className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6">Instructor</h2>
                <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-slate-200 overflow-hidden">
                        {course?.instructor?.avatar ? (
                            <img src={course?.instructor?.avatar} alt={course?.instructor?.name} />
                        ) : (
                            <div className="flex h-full items-center justify-center font-bold text-slate-400">
                                {course?.instructor?.name.charAt(0)}
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">{course?.instructor?.name}</h3>
                        {/* <p className="text-slate-500 text-sm mt-1">
                            {course?.instructor? || "Expert instructor specializing in this field."}
                        </p> */}
                    </div>
                </div>
            </section>
        </>
    );
}