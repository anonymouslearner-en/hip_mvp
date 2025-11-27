import { cn } from "@/lib/utils";

interface FormStep {
  step: number;
  title: string;
}

interface FormStepperProps {
  steps: FormStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
  compact?: boolean;
}

export default function FormStepper({
  steps,
  currentStep,
  onStepChange,
  compact = false,
}: FormStepperProps) {
  const shouldShowTitle = (step: number) => {
    if (!compact) return true;
    // Show title for current, previous, and next step
    return (
      step === currentStep ||
      step === currentStep - 1 ||
      step === currentStep + 1
    );
  };

  return (
    <div className="flex items-start gap-2 w-full">
      {steps.map(({ step, title }) => {
        const isActive = shouldShowTitle(step);
        return (
          <div
            key={step}
            className={cn(
              "transition-all duration-300 ease-in-out",
              compact && !isActive ? "w-8" : "flex-1"
            )}
          >
            <button
              type="button"
              onClick={() => onStepChange(step)}
              className="w-full flex flex-col items-start gap-2"
            >
              <div
                className={cn(
                  "w-full h-1 rounded-full transition-all duration-300 ease-in-out",
                  step <= currentStep ? "bg-primary" : "bg-border"
                )}
              />
              <div
                className={cn(
                  "w-full transition-all duration-300 ease-in-out overflow-hidden",
                  isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-xs leading-tight font-medium">{title}</p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
