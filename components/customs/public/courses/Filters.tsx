"use client";
import React from "react";
import FilterSection from "./FilterSection";
import { useAppDispatch } from "@/lib/hooks";
import { setClearAll } from "@/lib/features/courses/FiltersSlice";

const Filters = () => {
  const dispatch = useAppDispatch();
  return (
    <aside className="hidden lg:block w-52 shrink-0 space-y-8 sticky top-24">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Filters
        </h2>
        <button
          onClick={() => dispatch(setClearAll())}
          className="text-xs font-medium text-slate-500 hover:text-slate-950"
        >
          Clear All
        </button>
      </div>
      <FilterSection />
    </aside>
  );
};

export default Filters;
