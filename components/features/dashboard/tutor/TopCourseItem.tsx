import { MoreHorizontal } from "lucide-react";

const TopCourseItem = ({ title, sales, price }: any) => (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-400">
                IMG
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900 line-clamp-1">{title}</p>
                <p className="text-xs text-slate-500">{sales} Sales</p>
            </div>
        </div>
        <div className="text-right">
            <p className="text-sm font-bold text-slate-900">{price}</p>
            <button className="text-slate-300 hover:text-slate-600">
                <MoreHorizontal size={16} />
            </button>
        </div>
    </div>
);
export default TopCourseItem;
