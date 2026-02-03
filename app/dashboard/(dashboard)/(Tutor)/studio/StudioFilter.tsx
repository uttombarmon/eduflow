import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";

const StudioFilter = ({
  searchTerm,
  setSearchTerm,
  setStatus,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setStatus: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search your courses..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium border-none outline-none cursor-pointer hover:bg-slate-100 transition-colors"
        >
          <option defaultChecked value={""}>
            All Status
          </option>
          <option value={"publish"}>Publish</option>
          <option value={"draft"}>Draft</option>
          <option value={"archive"}>Archive</option>
        </select>
        <Button variant="ghost" size="icon" className="text-slate-500">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StudioFilter;
