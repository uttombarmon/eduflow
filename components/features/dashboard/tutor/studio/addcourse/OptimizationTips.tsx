import { CheckCircle2, Lightbulb } from "lucide-react";

// --- RIGHT COLUMN: OPTIMIZATION TIPS ---
const OptimizationTips = () => {
  const tips = [
    "Use action verbs in your title to grab attention.",
    "Clearly state the prerequisite skills required.",
    "Keep your description focused on the 'Why' not just the 'What'.",
  ];

  return (
    <div className="bg-[#0A1128] p-6 rounded-3xl shadow-lg text-white">
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
        <Lightbulb size={20} />
      </div>
      <h3 className="text-lg font-bold mb-4">Optimization Tips</h3>
      <ul className="space-y-4">
        {tips.map((tip, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-slate-300"
          >
            <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizationTips;
