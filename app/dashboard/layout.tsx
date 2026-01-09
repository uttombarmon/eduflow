import DashboardLayout from "@/components/features/dashboard/DashboardLayout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
