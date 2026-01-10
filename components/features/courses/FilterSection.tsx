"use client";
import {
  setCategorie,
  setLevel,
  setPrice,
} from "@/lib/features/courses/FiltersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Check } from "lucide-react";
export const CATEGORIES = [
  "All",
  "Development",
  "Design",
  "Artificial Intelligence",
  "Business",
];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
const PRICE_RANGES = ["All", "Free", "Paid"];

function FilterSection() {
  const dispatch = useAppDispatch();
  const { categorie, level, price } = useAppSelector(
    (state: RootState) => state.filters
  );
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-slate-900">
          Categories
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((cate) => (
            <button
              key={cate}
              onClick={() => dispatch(setCategorie(cate))}
              className={`flex w-full items-center justify-between text-sm py-1 px-2 rounded-md transition-colors ${
                categorie === cate
                  ? "bg-slate-100 text-slate-950 font-medium"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {cate}
              {categorie === cate && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <h3 className="text-sm font-semibold mb-4 text-slate-900">Level</h3>
        <div className="space-y-2">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => dispatch(setLevel(lvl))}
              className={`flex w-full items-center justify-between text-sm py-1 px-2 rounded-md transition-colors ${
                level === lvl
                  ? "bg-slate-100 text-slate-950 font-medium"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {lvl}
              {level === lvl && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <h3 className="text-sm font-semibold mb-4 text-slate-900">
          Price Range
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((rng) => (
            <button
              key={rng}
              onClick={() => dispatch(setPrice(rng))}
              className={`flex w-full items-center justify-between text-sm py-1 px-2 rounded-md transition-colors ${
                price === rng
                  ? "bg-slate-100 text-slate-950 font-medium"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {rng}
              {price === rng && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
