"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useGetCourseByIdQuery,
} from "@/lib/features/courses/courseApi";
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
  const searchParams = useSearchParams();

  // URL States
  const courseId = searchParams.get("courseId");
  const isEditMode = searchParams.get("isEdit") === "true";

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API Hooks
  const [createCourse] = useCreateCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();

  // Skip query execution if we are not in edit mode or don't have an ID
  const { data: existingCourseData, isLoading: isFetchLoading } =
    useGetCourseByIdQuery(courseId!, { skip: !isEditMode || !courseId });

  // Form States
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [courseData, setCourseData] = useState<Partial<Course>>({
    title: "",
    description: "",
    thumbnail: "",
    level: "beginner" as CourseLevel,
    category: "",
    price: 0,
    status: "draft" as CourseStatus,
  });

  const isInitialized = React.useRef(false);

  // Sync existing data to state when editing
  useEffect(() => {
    if (
      isEditMode &&
      existingCourseData &&
      !isFetchLoading &&
      !isInitialized.current
    ) {
      const course = existingCourseData;

      setCourseData({
        title: course.title || "",
        description: course.description || "",
        thumbnail: course.thumbnail || "",
        level: course.level || ("beginner" as CourseLevel),
        category: course.category || "",
        price: course.price || 0,
        status: course.status || ("draft" as CourseStatus),
      });

      if (course.modules) {
        setModules(course.modules);
      }

      isInitialized.current = true;
    }
  }, [existingCourseData, isEditMode, isFetchLoading]);

  // Loading state for fetching data in edit mode
  if (isEditMode && isFetchLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <Loading />
      </div>
    );
  }

  const handleNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Unified Save handler (handles both POST and PUT/PATCH)
  const handleSaveCourse = async () => {
    setIsSubmitting(true);

    // Fallback status assignment safely keeping other state intact
    const finalStatus: CourseStatus = "publish";

    const completePayload = {
      ...courseData,
      status: finalStatus,
      modules: modules,
    };

    try {
      if (isEditMode && courseId) {
        // Redux Update Mutation
        const res = await updateCourse({
          id: courseId,
          ...completePayload,
        }).unwrap();
        if (res?.success) {
          router.push("/dashboard/studio");
        }
      } else {
        // Redux Create Mutation
        const res = await createCourse(completePayload).unwrap();
        if (res?.success) {
          router.push("/dashboard/studio");
        }
      }
    } catch (error) {
      console.error(
        `Failed to ${isEditMode ? "update" : "create"} atomic course:`,
        error,
      );
    } finally {
      setIsSubmitting(false);
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
