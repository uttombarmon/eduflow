import { LucideIcon } from 'lucide-react';

interface MetricProps {
    title: string;
    value: string;
    trend: string;
    Icon: LucideIcon;
    color: string;
}

export const MetricCard = ({ title, value, trend, Icon, color }: MetricProps) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {trend}
            </span>
        </div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
);