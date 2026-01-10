"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import FilterSection from "./FilterSection";
// import { useAppSelector } from "@/lib/hooks";

const MobileFilter: React.FC = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // const {}= useAppSelector()
  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div
        className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm"
        onClick={() => setShowMobileFilters(!showMobileFilters)}
      />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="p-1 hover:bg-slate-100 rounded-md"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-160px)]">
          <FilterSection />
        </div>

        <div className="absolute bottom-6 left-6 right-6 pt-6 border-t bg-white">
          <button
            onClick={() => setShowMobileFilters(false)}
            className="w-full h-11 bg-slate-900 text-slate-50 rounded-md font-semibold text-sm"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
