"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCreateCourseMutation,
  useGetCourseByIdQuery,
} from "@/lib/features/courses/courseApi";
// import { useAddLessonMutation } from "@/lib/features/courses/lessons/lessonApi";
import {
  Course,
  CourseLevel,
  CourseModule,
  CourseStatus,
} from "@/types/Course";

import WizardHeader from "./WizardHeader";
import WizardStepper from "./WizardStepper";
import StepGeneralInfo from "./StepGeneralInfo";
import StepCurriculum from "./StepCurriculum";
import StepReview from "./StepReview";
import StepPricing from "./StepPricing";
import Loading from "@/components/layout/Loading";

const CreateCourseWizard = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const isEditMode = searchParams.get("isEdit");

  // API Hooks
  const [createCourse] = useCreateCourseMutation();
  const { data: existingCourseData, isLoading } = useGetCourseByIdQuery(
    courseId!,
  );

  // State
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [courseData, setCourseData] = useState<Partial<Course>>({
    title: "",
    description: "",
    thumbnail: "",
    level: "beginner" as CourseLevel, // Default based on image
    category: "",
    price: 0,
    status: "draft" as CourseStatus,
  });

  const isInitialized = React.useRef(false);

  useEffect(() => {
    if (
      !isLoading &&
      isEditMode &&
      existingCourseData &&
      !isInitialized.current
    ) {
      const course = existingCourseData;

      setCourseData({
        title: course.title,
        description: course.description,
        thumbnail: course.thumbnail,
        level: course.level,
        category: course.category,
        price: course.price,
        status: course.status,
      });

      if (course.modules) {
        setModules(course.modules);
      }

      isInitialized.current = true;
    }
  }, [existingCourseData, isEditMode, isLoading]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const handleNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Your existing save logic (adapted for the final step)
  // const handleSaveCourse = async () => {
  //   // Validation logic...
  //   try {
  //     const res = await createCourse(courseData).unwrap();
  //     if (res?.success && res.data?.id) {
  //       await Promise.all(
  //         lessons.map((lesson) =>
  //           addLessonMutation({
  //             id: res?.data?.id,
  //             lesson: lesson as Lesson,
  //           }).unwrap(),
  //         ),
  //       );
  //       router.push("/dashboard/studio");
  //     }
  //   } catch (error) {
  //     console.error("Failed to create course", error);
  //   }
  // };
  // If your backend endpoint supports parsing nested payloads:
  const handleSaveCourse = async () => {
    setCourseData({ ...courseData, status: "publish" });
    try {
      const completePayload = {
        ...courseData,
        modules: modules, // Send the entire nested modules & lessons array at once
      };
      console.log(completePayload);

      const res = await createCourse(completePayload).unwrap();
      if (res?.success) {
        router.push("/dashboard/studio");
      }
    } catch (error) {
      console.error("Failed to complete atomic course creation:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        <WizardHeader />
        <WizardStepper currentStep={currentStep} />
        <div className="mt-8">
          {currentStep === 1 && (
            <StepGeneralInfo
              courseData={courseData}
              setCourseData={setCourseData}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 2 && (
            <StepCurriculum
              modules={modules}
              setModules={setModules}
              onPrev={handlePrevStep}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 3 && (
            <StepPricing
              courseData={courseData}
              setCourseData={setCourseData}
              onPrev={handlePrevStep}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 4 && (
            <StepReview
              courseData={courseData}
              modules={modules}
              onPrev={handlePrevStep}
              onSave={handleSaveCourse}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourseWizard;
