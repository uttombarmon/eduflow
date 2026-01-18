import { ArrowUpRight } from "lucide-react";
const TutorStatCard = ({ title, value, change, icon, trend }: any) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
            <div
                className={`flex items-center text-xs font-bold ${trend === "up" ? "text-emerald-600" : "text-slate-400"
                    }`}
            >
                {trend === "up" && <ArrowUpRight size={14} />} {change}
            </div>
        </div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
    </div>
);
export default TutorStatCard;