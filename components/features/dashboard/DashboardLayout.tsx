"use client";
import React from "react";
import Asidebar from "./Asidebar";
import { Menu } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { setSideBarOpen } from "@/lib/features/dashboard/dashboardUISlice";
import Logo from "@/components/layout/Logo";
import { setLogOut } from "@/lib/features/auth/AuthSlice";
import { useLogoutMutation } from "@/lib/features/auth/userApi";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: string;
}) {
  const dispatch = useAppDispatch();
  const { isSideBarOpen } = useAppSelector(
    (state: RootState) => state.dashboardUI
  );
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    if (path === "/dashboard") return "Dashboard";
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans selection:bg-slate-200">
      {/* Mobile Top Header */}
      <header className=" md:hidden lg:hidden xl:hidden flex h-14 items-center gap-4 border-b bg-white px-4 shrink-0 sticky top-0 z-10">
        <button
          onClick={() => dispatch(setSideBarOpen(!isSideBarOpen))}
          className=" md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-slate-100 h-9 w-9"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 font-semibold">
          <Logo />
        </div>
      </header>

      {/* Sidebar - Desktop & Tablet */}
      <div
        className={` w-64 relative ${isSideBarOpen ? " flex" : "hidden md:flex"
          }`}
      >
        <Asidebar />
      </div>
      {/* Content Area */}
      <main className="flex flex-1 flex-col h-screen ">
        {/* Inner Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
          <div className=" max-w-7xl">{children}</div>
        </div>
      </main>

      {isSideBarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm flex md:hidden"
          onClick={() => dispatch(setSideBarOpen(!isSideBarOpen))}
        />
      )}
    </div>
  );
}
