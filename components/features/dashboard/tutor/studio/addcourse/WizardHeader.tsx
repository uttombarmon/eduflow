import { X } from "lucide-react";
import Link from "next/link";

const WizardHeader = () => (
  <div className="flex justify-between items-start mb-8">
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
        Create New Course
      </h1>
      <p className="text-slate-500">
        Define the core foundations of your learning experience. Use our AI
        assistant to optimize your content for maximum student engagement.
      </p>
    </div>
    <Link
      href={"/dashboard/studio"}
      className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
    >
      <X size={16} /> Cancel
    </Link>
  </div>
);
export default WizardHeader;
