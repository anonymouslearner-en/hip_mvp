import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

interface FormStep {
  step: number;
  title: string;
}

interface FormStepperProps {
  steps: FormStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function FormStepper({
  steps,
  currentStep,
  onStepChange,
}: FormStepperProps) {
  return (
    <Stepper
      className="items-start gap-4"
      value={currentStep}
      onValueChange={onStepChange}
    >
      {steps.map(({ step, title }) => (
        <StepperItem className="flex-1" key={step} step={step}>
          <StepperTrigger className="w-full flex-col items-start gap-2 rounded">
            <StepperIndicator asChild className="h-1 w-full bg-border">
              <span className="sr-only">{step}</span>
            </StepperIndicator>
            <div className="space-y-0.5">
              <StepperTitle className="text-xs">{title}</StepperTitle>
            </div>
          </StepperTrigger>
        </StepperItem>
      ))}
    </Stepper>
  );
}
