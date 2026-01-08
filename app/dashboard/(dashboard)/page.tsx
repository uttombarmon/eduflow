import DashboardLayout from "@/components/features/dashboard/DashboardLayout";
import StudentOverviews from "@/components/features/dashboard/student/StudentOverview";
import TutorDashboard from "@/components/features/dashboard/tutor/TutorOverview";

export default function page() {
  const userRole = "student";

  return (
    <DashboardLayout role={userRole}>
      {false ? <TutorDashboard /> : <StudentOverviews />}
    </DashboardLayout>
  );
}
