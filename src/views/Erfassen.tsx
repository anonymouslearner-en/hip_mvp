import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Page } from "@/components/layout/Page";
import MetaProgress from "@/components/organisms/MetaProgress";
import FormStepper from "@/components/organisms/FormStepper";
import { Mainform } from "@/forms/Mainform/Mainform";
import { consultationSteps } from "@/lib/constants";
import { HelperLane } from "@/components/organisms/HelperLane";

const buildingFormSteps = [
  { step: 1, title: "Haustyp" },
  { step: 2, title: "Energieversorgung" },
  { step: 3, title: "Örtliche Möglichkeiten" },
  { step: 4, title: "Erneuerbare Energien" },
  { step: 5, title: "Besichtigungstermin" },
  { step: 6, title: "Technische Planung" },
  { step: 7, title: "Rechtliches" },
  { step: 8, title: "Angebot" },
];

export const Erfassen = () => {
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const navigate = useNavigate();

  const handleConsultationStepChange = (step: number) => {
    const targetStep = consultationSteps.find((s) => s.step === step);
    if (targetStep) {
      navigate(targetStep.path);
    }
  };

  return (
    <Page layoutType="default" header={<Navbar />}>
      <div className="grid grid-cols-[15%_60%_25%] gap-6 mx-auto max-w-[1080px] px-4 pt-8">
        <aside className="bg-muted/30 p-4 rounded-lg">
          <MetaProgress steps={consultationSteps} />
        </aside>

        <main className="space-y-6 w-full min-w-0">
          <h2 className="text-2xl font-semibold mb-0">Datenerfassung</h2>
          <p className="text-sm font-normal">
            Erzählen Sie uns von Ihrem Gebäude
          </p>

          <div className="bg-card p-8 rounded-lg border space-y-6 w-full">
            <FormStepper
              steps={buildingFormSteps}
              currentStep={currentFormStep}
              onStepChange={setCurrentFormStep}
              compact={true}
            />

            <Mainform
              currentStep={currentFormStep}
              onStepChange={setCurrentFormStep}
              onConsultationStepChange={handleConsultationStepChange}
            />
          </div>
        </main>

        <HelperLane />
      </div>
    </Page>
  );
};
