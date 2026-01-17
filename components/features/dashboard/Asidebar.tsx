"use client";

import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  LayoutGrid,
  Newspaper,
  PlusCircle,
  PieChart,
  Trophy,
  Settings,
  X,
  LogOut,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { setSideBarOpen } from "@/lib/features/dashboard/dashboardUISlice";
import { setLogOut } from "@/lib/features/auth/AuthSlice";
import { useLogoutMutation } from "@/lib/features/auth/userApi";
import Logo from "@/components/layout/Logo";
import Loading from "@/components/layout/Loading";

function Asidebar() {
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const { user, isCheckingAuth } = useAppSelector(
    (state: RootState) => state.auth
  );
  const pathname = usePathname();

  const { isSideBarOpen } = useAppSelector(
    (state: RootState) => state.dashboardUI
  );

  if (isCheckingAuth) {
    return <Loading />;
  }
  if (!user || user?.role === undefined) return redirect("/");

  const menuItems = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      roles: ["student", "tutor", "admin"],
    },
    {
      href: "/dashboard/my-learning",
      icon: BookOpen,
      label: "My Learning",
      roles: ["student"],
    },
    {
      href: "/dashboard/studio",
      icon: PlusCircle,
      label: "Studio",
      roles: ["tutor"],
    },
    {
      href: "/dashboard/analytics",
      icon: PieChart,
      label: "Analytics",
      roles: ["tutor", "admin"],
    },
    {
      href: "/dashboard/certificates",
      icon: Trophy,
      label: "Certificates",
      roles: ["student"],
    },
    {
      href: "/courses",
      icon: LayoutGrid,
      label: "Courses",
      roles: ["student"],
    },
    {
      href: "/blogs",
      icon: Newspaper,
      label: "Blogs",
      roles: ["student", "tutor", "admin"],
    },
    {
      href: "/dashboard/settings",
      icon: Settings,
      label: "Settings",
      roles: ["student", "tutor", "admin"],
    },
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(user.role)
  );

  const handleLogout = async () => {
    await logout(undefined).unwrap();
    dispatch(setLogOut());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    redirect("/");
  };
  return (
    <aside
      className={`
        fixed h-full top-0 w-64 inset-y-0 left-0 z-50  border-r bg-white transform transition-transform duration-200 ease-in-out md:static md:translate-x-0
        ${isSideBarOpen ? "translate-x-0" : "-translate-x-full hidden md:flex"}
      `}
    >
      <div className="flex flex-col h-full w-full">
        <div className="flex h-14 items-center border-b border-slate-800/10 px-6 shrink-0">
          <Logo />
          <div className="ml-auto h-auto block md:hidden lg:hidden xl:hidden p-1 rounded-md hover:bg-slate-300/50 text-slate-600 hover:text-black">
            <button onClick={() => dispatch(setSideBarOpen(!isSideBarOpen))}>
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto py-4 px-3">
          <nav className="grid gap-1">
            {filteredMenuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    // Close sidebar on mobile when navigating
                    if (window.innerWidth < 768) {
                      dispatch(setSideBarOpen(false));
                    }
                  }}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${isActive
                      ? "bg-slate-200 text-slate-800 shadow-md shadow-blue-900/20"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-200"
                    }`}
                >
                  <item.icon
                    className={`h-4 w-4 ${isActive
                        ? "text-slate-800"
                        : "text-slate-500 group-hover:text-white"
                      }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3 rounded-lg bg-slate-800/10 p-3 ring-1 ring-slate-800/50">
            {user.avatar && user.avatar.length > 0 ? (
              <Image
                src={user.avatar}
                alt={user.name}
                className="h-9 w-9 rounded-full bg-slate-700 object-cover ring-2 ring-slate-700"
                width={100}
                height={100}
              />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900/50 text-blue-200 text-xs font-bold ring-2 ring-blue-900">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-semibold truncate leading-none mb-1 text-slate-500">
                {user.name}
              </span>
              <span className="text-xs text-slate-400 capitalize">
                {user.role}
              </span>
            </div>
          </div>
          <button
            disabled={isLoading}
            onClick={() => handleLogout()}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/10 px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-red-900/20 hover:text-red-400 hover:border-red-900/30"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Asidebar;
