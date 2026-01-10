"use client";
import StudentOverviews from "@/components/features/dashboard/student/StudentOverview";
import TutorDashboard from "@/components/features/dashboard/tutor/TutorOverview";
import Loading from "@/components/layout/Loading";
import { useGetUserProfileQuery } from "@/lib/features/auth/userApi";

export default function Page() {
  const { data, isLoading } = useGetUserProfileQuery();
  const userRole = data?.role;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : userRole === "tutor" ? (
        <TutorDashboard />
      ) : (
        <StudentOverviews />
      )}
    </>
  );
}
