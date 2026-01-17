"use client";
import StudentOverviews from "@/components/features/dashboard/student/StudentOverview";
import TutorDashboard from "@/components/features/dashboard/tutor/Overview";
import Loading from "@/components/layout/Loading";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

export default function Page() {
  const { user, isCheckingAuth } = useAppSelector((state: RootState) => state.auth);
  const userRole = user?.role.toLowerCase();
  return (
    <>
      {isCheckingAuth ? (
        <Loading />
      ) : userRole === "tutor" ? (
        <TutorDashboard />
      ) : (
        <StudentOverviews />
      )}
    </>
  );
}
