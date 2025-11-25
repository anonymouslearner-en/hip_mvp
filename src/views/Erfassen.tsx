import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";
import ConsultationProgress from "@/components/organisms/MetaProgress";
import FormStepper from "@/components/organisms/FormStepper";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Mainform } from "@/forms/Mainform/Mainform";

export const Erfassung = () => {
  const consultationSteps = [
    { id: 1, title: "Erfassung", description: "Gebäudedaten erfassen" },
    { id: 2, title: "Beratung", description: "Empfehlungen für Ihr Gebäude" },
    {
      id: 3,
      title: "Auftrag",
      description: "Anfrage abschließen und Termin buchen",
    },
  ];

  const buildingFormSteps = [
    { step: 1, title: "Grundinformationen" },
    { step: 2, title: "Gebäudedetails" },
    { step: 3, title: "Energiesystem" },
    { step: 4, title: "Zusatzinformationen" },
  ];

  const [currentConsultationStep, setCurrentConsultationStep] = useState(1);
  const [currentFormStep, setCurrentFormStep] = useState(1);

  const handleNext = () => {
    if (currentConsultationStep < consultationSteps.length) {
      setCurrentConsultationStep(currentConsultationStep + 1);
    }
  };

  const handleBack = () => {
    if (currentConsultationStep > 1) {
      setCurrentConsultationStep(currentConsultationStep - 1);
    }
  };

  return (
    <Page layoutType="default" header={<Navbar />}>
      <div className="grid grid-cols-[15%_60%_25%] gap-6 mx-auto max-w-[1080px] px-4 pt-8">
        {/* Column 1 - Consultation Progress (15%) */}
        <aside className="bg-muted/30 p-4 rounded-lg">
          <ConsultationProgress
            currentStep={currentConsultationStep}
            steps={consultationSteps}
            onStepChange={setCurrentConsultationStep}
          />
        </aside>

        {/* Column 2 - Multi-step Form (60%) */}
        <main className="space-y-6">
          <h2 className="text-2xl font-semibold mb-0"> Datenerfassung </h2>
          <p className="text-sm font-normal">
            Erzählen Sie uns von Ihrem Gebäude
          </p>

          <div className="bg-card p-8 rounded-lg border space-y-6">
            <FormStepper
              steps={buildingFormSteps}
              currentStep={currentFormStep}
              onStepChange={setCurrentFormStep}
            />

            <Mainform
              currentStep={currentFormStep}
              onStepChange={setCurrentFormStep}
            />
          </div>

          <div className="flex gap-4 justify-between pt-4">
            <Button
              onClick={handleBack}
              disabled={currentConsultationStep === 1}
              variant="outline"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentConsultationStep === consultationSteps.length}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </main>

        {/* Column 3 - Placeholder (25%) */}
        <aside className="bg-muted/30 p-4 rounded-lg">
          <h3 className="font-semibold mb-4">Additional Info</h3>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </aside>
      </div>
    </Page>
  );
};
