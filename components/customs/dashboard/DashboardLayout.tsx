"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  LayoutGrid,
  Newspaper,
  PlusCircle,
  PieChart,
  Trophy,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
} from "lucide-react";
import { useGetUserProfileQuery } from "@/lib/features/auth/userApi";
import Image from "next/image";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: user, isLoading, error } = useGetUserProfileQuery();

  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      roles: ["student", "tutor", "admin"],
    },
    {
      id: "explorer",
      icon: LayoutGrid,
      label: "Courses",
      roles: ["student"],
    },
    {
      id: "my-courses",
      icon: BookOpen,
      label: "My Learning",
      roles: ["student"],
    },
    {
      id: "blog",
      icon: Newspaper,
      label: "Journal",
      roles: ["student", "tutor", "admin"],
    },
    { id: "studio", icon: PlusCircle, label: "Studio", roles: ["tutor"] },
    {
      id: "analytics",
      icon: PieChart,
      label: "Analytics",
      roles: ["tutor", "admin"],
    },
    {
      id: "certificates",
      icon: Trophy,
      label: "Certificates",
      roles: ["student"],
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
      roles: ["student", "tutor", "admin"],
    },
  ];
  if (isLoading) return <p>Loading...</p>;
  if (!user || user?.role === undefined || error) return <p>Error...</p>;
  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(user.role)
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans selection:bg-slate-200">
      {/* Mobile Top Header */}
      <header className="md:hidden flex h-14 items-center gap-4 border-b bg-white px-4 shrink-0">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-slate-100 h-9 w-9"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-slate-50">
            <span className="text-xs italic">E</span>
          </div>
          <span>EduFlow</span>
        </div>
      </header>

      {/* Sidebar - Desktop & Tablet */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 border-r bg-white transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="flex h-14 items-center border-b px-6">
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-slate-50">
                <span className="italic">E</span>
              </div>
              <span className="tracking-tight text-lg">EduFlow</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="ml-auto md:hidden p-1"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-auto py-4 px-3">
            <nav className="grid gap-1 px-2">
              {filteredMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    // setActiveTab(item.id);
                    // setIsSidebarOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-slate-100 ${
                    // activeTab === item.id
                    true
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              {user.avatar && user.avatar.length > 0 ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full bg-slate-200"
                  width={100}
                  height={100}
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-50 text-xs font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold truncate leading-none mb-1">
                  {user.name}
                </span>
                <span className="text-xs text-slate-500 capitalize">
                  {user.role}
                </span>
              </div>
            </div>
            <button
              // onClick={onLogout}
              className="mt-4 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="hidden md:flex h-14 items-center gap-4 border-b bg-white px-8 shrink-0">
          <div className="flex-1 text-sm font-medium text-slate-500">
            {/* {activeTab.charAt(0).toUpperCase() +
              activeTab.slice(1).replace("-", " ")} */}
          </div>
          <div className="flex items-center gap-4">
            <button className="relative inline-flex items-center justify-center rounded-md h-9 w-9 text-slate-500 hover:text-slate-950 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
          </div>
        </header>

        {/* Inner Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
