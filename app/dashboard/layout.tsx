"use client"
import DashboardLayout from "@/components/features/dashboard/DashboardLayout";
import Loading from "@/components/layout/Loading";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { redirect } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { user, isCheckingAuth } = useAppSelector((state: RootState) => state.auth);
    if (isCheckingAuth) {
        return <div className=" flex items-center justify-center h-screen"><Loading /></div>;
    }
    if (!user) {
        return redirect('/');
    }
    return <DashboardLayout>{children}</DashboardLayout>;
}
