import {
  Users,
  DollarSign,
  Star,
  Clock,
  PlayCircle,
  Users2,
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import Link from "next/link";
import { useGetTutorDashboardQuery } from "@/lib/features/dashboard/tutor/tutorApi";
import { getErrorMessage } from "@/lib/utils/ErrorParse";
import Loading from "@/components/layout/Loading";
import { redirect } from "next/navigation";

const TutorDashboard = () => {
  const { data, isLoading, error } = useGetTutorDashboardQuery();
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  if (error) {
    console.log("Error: ", getErrorMessage(error));
    redirect("/");
  }
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">
            Welcome back! Here is what&apos;s happening today.
          </p>
        </div>
        <Link
          href={"/dashboard/studio/add_course"}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          + Create New Course
        </Link>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Earnings"
          value={data?.data?.totalEarnings || 0}
          trend={data?.data?.totalEarningsChange || "0%"}
          Icon={DollarSign}
          color="bg-emerald-500"
        />
        <MetricCard
          title="Active Students"
          value={data?.data?.totalStudents || 0}
          trend={data?.data?.totalStudentsChange || "0%"}
          Icon={Users}
          color="bg-blue-500"
        />
        <MetricCard
          title="Course Rating"
          value={data?.data?.averageRating || 0}
          trend="Static"
          Icon={Star}
          color="bg-amber-500"
        />
        <MetricCard
          title="Hours Taught"
          value={data?.data?.totalHours || 0}
          trend={data?.data?.totalHoursChange || "0%"}
          Icon={Clock}
          color="bg-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Progress Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-bold mb-4">Active Courses</h2>
          <div className="space-y-4">
            {["React for Beginners", "Advanced TypeScript"].map((course) => (
              <div key={course} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{course}</span>
                  <span className="text-gray-500">75% Complete</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          <div className="space-y-6">
            <div className="flex gap-3">
              <PlayCircle className="text-blue-500 w-5 h-5" />
              <div>
                <p className="text-sm text-gray-800">
                  <b>Sarah M.</b> started &quot;Module 3&quot;
                </p>
                <p className="text-xs text-gray-400">2 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
