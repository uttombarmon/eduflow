const WizardStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = ["GENERAL INFO", "CURRICULUM", "PRICING", "REVIEW"];

  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto my-12 relative">
      {/* Background Line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>

      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isPast = currentStep > stepNum;

        return (
          <div
            key={step}
            className="flex flex-col items-center gap-3 bg-[#F8F9FA] px-4"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors
              ${isActive ? "bg-slate-900 text-white" : isPast ? "bg-slate-300 text-slate-700" : "bg-slate-200 text-slate-400"}`}
            >
              {stepNum}
            </div>
            <span
              className={`text-xs font-bold tracking-wider ${isActive ? "text-slate-900" : "text-slate-400"}`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default WizardStepper;
