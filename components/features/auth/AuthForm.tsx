"use client";
import { setUser } from "@/lib/features/auth/AuthSlice";
import {
  useLoginMutation,
  useSignupMutation,
} from "@/lib/features/auth/userApi";
import { useAppDispatch } from "@/lib/hooks";
import { GraduationCap, Laptop } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

interface FormProps {
  authMode: "login" | "signup";
  handleModalToggle: () => void;
}

const AuthForm: React.FC<FormProps> = ({ authMode, handleModalToggle }) => {
  const [signup, { isLoading, error }] = useSignupMutation();
  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response =
        authMode == "signup"
          ? await signup(formData).unwrap()
          : await login({
            email: formData.email,
            password: formData.password,
          }).unwrap();
      dispatch(setUser(response.user));
      handleModalToggle();
      redirect("/dashboard");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {authMode === "signup" && (
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="Max Power"
            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">Email</label>
        <input
          required
          type="email"
          placeholder="m@example.com"
          className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">Password</label>
        <input
          required
          type="password"
          className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>

      {authMode === "signup" && (
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: "student" })}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${formData.role === "student"
              ? "border-slate-950 bg-slate-50"
              : "border-slate-200 text-slate-500 hover:bg-slate-50"
              }`}
          >
            <GraduationCap size={16} /> Student
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: "tutor" })}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${formData.role === "tutor"
              ? "border-slate-950 bg-slate-50"
              : "border-slate-200 text-slate-500 hover:bg-slate-50"
              }`}
          >
            <Laptop size={16} /> Tutor
          </button>
        </div>
      )}

      <button
        disabled={isLoading}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-10 w-full px-4 py-2 mt-2"
      >
        {isLoading
          ? "Please wait..."
          : authMode === "login"
            ? "Sign In"
            : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
