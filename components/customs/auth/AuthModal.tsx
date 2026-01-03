"use client";
import React, { useState, useEffect } from "react";
import { X, GraduationCap, Laptop } from "lucide-react";
import { UserRole, User as UserType } from "@/types/TypesAll";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setAuthModalOpen, setAuthMode } from "@/lib/features/UIslice";
import AuthForm from "./AuthForm";

const AuthModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthModalOpen, authMode } = useSelector(
    (state: RootState) => state.ui
  );
  const handleAuthTrigger = (mode: "login" | "signup") => {
    dispatch(setAuthMode(mode));
    dispatch(setAuthModalOpen(true));
  };
  const handleModalToggle = () => {
    dispatch(setAuthModalOpen(!isAuthModalOpen));
  };
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;
  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-white/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleModalToggle}
      />
      <div className="relative w-full max-w-100 bg-white rounded-lg border border-slate-200 shadow-lg animate-in zoom-in-95 duration-200">
        <div className="p-6">
          <button
            onClick={handleModalToggle}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-900 rounded-sm opacity-70 transition-opacity hover:opacity-100"
          >
            <X size={18} />
          </button>

          <div className="space-y-1.5 text-center sm:text-left mb-6">
            <h2 className="text-2xl font-semibold tracking-tight leading-none">
              {authMode === "login" ? "Login" : "Create an account"}
            </h2>
            <p className="text-sm text-slate-500">
              {authMode === "login"
                ? "Enter your email below to login"
                : "Enter your information to get started"}
            </p>
          </div>
          <AuthForm
            authMode={authMode}
            handleModalToggle={handleModalToggle}
          ></AuthForm>
          <div className="mt-4 text-center text-sm">
            <span className="text-slate-500">
              {authMode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
            </span>
            <button
              onClick={() =>
                handleAuthTrigger(authMode === "login" ? "signup" : "login")
              }
              className="underline underline-offset-4 hover:text-slate-900 font-medium"
            >
              {authMode === "login" ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
