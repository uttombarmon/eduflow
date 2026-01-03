import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  ArrowRight,
  GraduationCap,
  Laptop,
} from "lucide-react";
import { UserRole, User as UserType } from "@/types/TypesAll";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onSuccess: (user: UserType) => void;
  initialMode?: "login" | "signup";
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  // onSuccess,
  initialMode = "login",
}) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [role, setRole] = useState<UserRole>("student");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const newUser: UserType = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name || "User",
        email: formData.email,
        role: mode === "signup" ? role : "student",
        avatar: `https://avatar.vercel.sh/${formData.email}`,
      };
      setIsLoading(false);
      // onSuccess(newUser);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-white/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-100 bg-white rounded-lg border border-slate-200 shadow-lg animate-in zoom-in-95 duration-200">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-900 rounded-sm opacity-70 transition-opacity hover:opacity-100"
          >
            <X size={18} />
          </button>

          <div className="space-y-1.5 text-center sm:text-left mb-6">
            <h2 className="text-2xl font-semibold tracking-tight leading-none">
              {mode === "login" ? "Login" : "Create an account"}
            </h2>
            <p className="text-sm text-slate-500">
              {mode === "login"
                ? "Enter your email below to login"
                : "Enter your information to get started"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Password
              </label>
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

            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
                    role === "student"
                      ? "border-slate-950 bg-slate-50"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <GraduationCap size={16} /> Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("tutor")}
                  className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
                    role === "tutor"
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
                : mode === "login"
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-slate-500">
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
            </span>
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="underline underline-offset-4 hover:text-slate-900 font-medium"
            >
              {mode === "login" ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
