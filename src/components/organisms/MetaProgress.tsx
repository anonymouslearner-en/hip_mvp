interface Step {
  id: number;
  title: string;
  description: string;
}

interface Props {
  currentStep: number;
  steps: Step[];
  onStepChange: (step: number) => void;
}

export default function MetaProgress({
  currentStep,
  steps,
  onStepChange,
}: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-sm mb-4 text-foreground">
        Beratungsprozess
      </h3>
      {steps.map((step) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <button
            key={step.id}
            onClick={() => onStepChange(step.id)}
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
                {isCompleted ? "✓" : step.id}
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
                <p className="text-xs text-muted-foreground mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
