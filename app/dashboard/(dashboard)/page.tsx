import DashboardLayout from "@/components/customs/dashboard/DashboardLayout";
import StudentOverviews from "@/components/customs/dashboard/student/StudentOverviews";
import TutorDashboard from "@/components/customs/dashboard/tutor/TutorOverviews";

export default function page() {
  const userRole = "student";

  return (
    <DashboardLayout role={userRole}>
      {false ? <TutorDashboard /> : <StudentOverviews />}
    </DashboardLayout>
  );
}
