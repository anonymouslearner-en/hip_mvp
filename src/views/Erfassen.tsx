import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";
import FormProgress from "@/components/organisms/FormProgress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Erfassung = () => {
  const formSteps = [
    { id: 1, title: "Personal Info", description: "Enter your basic details" },
    { id: 2, title: "Address", description: "Provide your address" },
    { id: 3, title: "Review", description: "Review and submit" },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < formSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Page layoutType="default" header={<Navbar />}>
      <section className="space-y-6">
        <h2>Erfassung</h2>

        <FormProgress
          currentStep={currentStep}
          steps={formSteps}
          onStepChange={setCurrentStep}
        />

        <div className="flex gap-4 justify-between pt-4">
          <Button
            onClick={handleBack}
            disabled={currentStep === 1}
            variant="outline"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentStep === formSteps.length}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Page>
  );
};
