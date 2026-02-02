"use client";
import React, { useState } from "react";
import { useGetUserProfileQuery } from "@/lib/features/auth/userApi";
import Loading from "@/components/layout/Loading";
import {
  User,
  Bell,
  Lock,
  Save,
  Shield,
  Mail,
  Camera,
  LogOut,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import ProfileTab from "@/components/features/dashboard/settings/ProfileTab";
import { User as UserType } from "@/types/User";
import NotificationsTab from "@/components/features/dashboard/settings/NotificationsTab";

const SettingsPage = () => {
  const { data: user, isLoading } = useGetUserProfileQuery();
  const [activeTab, setActiveTab] = useState<
    "profile" | "notifications" | "security"
  >("profile");

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [notifications, setNotifications] = useState({
    email: true,
    updates: false,
    marketing: true,
  });

  React.useEffect(() => {
    if (user && user.name && user.email) {
      setName(user?.name);
      setEmail(user?.email);
    }
  }, [user]);

  if (isLoading)
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loading />
      </div>
    );

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
      <p className="text-slate-500 mb-8">
        Manage your account settings and preferences.
      </p>

      <div className="flex flex-col gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200">
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <ProfileTab user={user as UserType}></ProfileTab>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === "notifications" && (
            <NotificationsTab
              notifications={notifications}
              setNotifications={setNotifications}
            />
          )}

          {/* SECURITY TAB */}
          {activeTab === "security" && (
            <div className="p-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  Security
                </h2>
                <p className="text-sm text-slate-500">
                  Manage your password and account security.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Current Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      New Password
                    </label>
                    <div className="relative">
                      <Lock
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-4">
                <h3 className="text-sm font-bold text-red-600">Danger Zone</h3>
                <div className="flex items-center justify-between p-4 bg-red-50 border border-red-100 rounded-xl">
                  <div>
                    <h4 className="text-sm font-bold text-red-900">
                      Delete Account
                    </h4>
                    <p className="text-xs text-red-700 mt-1">
                      Permanently delete your account and all data.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-white text-red-600 border border-red-200 text-xs font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
