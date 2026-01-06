"use client";
import { setSearch } from "@/lib/features/courses/FiltersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Search } from "lucide-react";

const SearchCourse = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state: RootState) => state.filters);
  // const [search, setSearch] = useState();
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
      <input
        type="text"
        placeholder="Search by course, instructor, or topic..."
        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-9 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchCourse;
