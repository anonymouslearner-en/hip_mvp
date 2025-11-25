import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";
import ConsultationProgress from "@/components/organisms/MetaProgress";
import FormStepper from "@/components/organisms/FormStepper";
import { Mainform } from "@/forms/Mainform/Mainform";
import { consultationSteps } from "@/App";
import { HelperLane } from "@/components/organisms/HelperLane";

const buildingFormSteps = [
  { step: 1, title: "Grundinformationen" },
  { step: 2, title: "Gebäudedetails" },
  { step: 3, title: "Energiesystem" },
  { step: 4, title: "Zusatzinformationen" },
];

interface ErfassungProps {
  consultationStep: number;
  onConsultationStepChange: (step: number) => void;
}

export const Erfassen = ({
  consultationStep,
  onConsultationStepChange,
}: ErfassungProps) => {
  const [currentFormStep, setCurrentFormStep] = useState(1);

  const renderContent = () => {
    switch (consultationStep) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-0">Datenerfassung</h2>
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
                onConsultationStepChange={onConsultationStepChange}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-0">Beratung</h2>
            <p className="text-sm font-normal">Empfehlungen für Ihr Gebäude</p>
            <div className="bg-card p-8 rounded-lg border">
              <p className="text-muted-foreground">
                Beratung component will be displayed here
              </p>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-0">Auftrag</h2>
            <p className="text-sm font-normal">
              Anfrage abschließen und Termin buchen
            </p>
            <div className="bg-card p-8 rounded-lg border">
              <p className="text-muted-foreground">
                Auftrag component will be displayed here
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Page layoutType="default" header={<Navbar />}>
      <div className="grid grid-cols-[15%_60%_25%] gap-6 mx-auto max-w-[1080px] px-4 pt-8">
        <aside className="bg-muted/30 p-4 rounded-lg">
          <ConsultationProgress
            currentStep={consultationStep}
            steps={consultationSteps}
            onStepChange={onConsultationStepChange}
          />
        </aside>

        <main className="space-y-6">{renderContent()}</main>

        <HelperLane />
      </div>
    </Page>
  );
};
