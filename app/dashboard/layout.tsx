"use client";
import DashboardLayout from "@/components/features/dashboard/DashboardLayout";
import Loading from "@/components/layout/Loading";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isCheckingAuth } = useAppSelector(
    (state: RootState) => state.auth,
  );
  useEffect(() => {
    if (!isCheckingAuth && !user) {
      router.push("/");
    }
  }, [isCheckingAuth, user, router]);
  if (isCheckingAuth) {
    return (
      <div className=" flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }
  if (!user) return null;
  return <DashboardLayout>{children}</DashboardLayout>;
}
