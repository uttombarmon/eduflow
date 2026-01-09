import { Search } from 'lucide-react'
import { FilterType } from './MyLearningPage';

interface ToobarProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Toobar = ({ filter, setFilter, searchQuery, setSearchQuery }: ToobarProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex p-1 bg-slate-100 rounded-lg w-full sm:w-auto">
                {(['all', 'in-progress', 'completed'] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-md capitalize transition-all ${filter === t
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        {t.replace('-', ' ').toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search your courses..."
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-9 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Toobar