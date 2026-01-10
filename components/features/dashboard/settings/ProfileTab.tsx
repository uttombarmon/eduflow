import { User as UserType } from "@/types/TypesAll";
import { Camera, Mail, Save, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileTab = ({ user }: { user: UserType }) => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">
          Profile Information
        </h2>
        <p className="text-sm text-slate-500">
          Update your photo and personal details.
        </p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-6 pb-8 border-b border-slate-100">
        <div className="relative">
          <div>
            <div className="bg-slate-500 h-24 w-24 rounded-full">
              {user?.avatar && user.avatar.length > 0 ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full rounded-full bg-slate-700 object-cover ring-2 ring-slate-700"
                  width={100}
                  height={100}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-900/50 text-blue-200 text-xs font-bold ring-2 ring-blue-900">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm ring-2 ring-white">
              <Camera size={14} />
            </button>
          </div>
        </div>
        <div>
          <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 border border-indigo-200 bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
            Change Photo
          </button>
          <p className="text-xs text-slate-400 mt-2">
            JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Full Name
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                defaultValue={user?.name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full px-8 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                defaultValue={user?.email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full px-8 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Role</label>
          <div className="inline-flex items-center ml-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
            {user?.role}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
