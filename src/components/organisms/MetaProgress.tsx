import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  steps: Array<{ step: number; title: string; path: string }>;
}

export const MetaProgress = ({ steps }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current step from URL
  const currentStep =
    steps.find((s) => s.path === location.pathname)?.step || 1;

  const handleStepChange = (step: number) => {
    const targetStep = steps.find((s) => s.step === step);
    if (targetStep) {
      navigate(targetStep.path);
    }
  };

  return (
    <div className="space-y-2">
      {steps.map((step) => {
        const isActive = currentStep === step.step;
        const isCompleted = currentStep > step.step;

        return (
          <button
            key={step.step}
            onClick={() => handleStepChange(step.step)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
              isActive ? "bg-primary/5" : "hover:bg-muted/50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-7 h-7 min-w-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  isCompleted
                    ? "bg-primary text-primary-foreground"
                    : isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? "✓" : step.step}
              </div>
              <div className="flex-1">
                <p
                  className={`font-medium text-sm ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground transition-colors"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MetaProgress;
