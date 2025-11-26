// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Navbar } from "@/components/layout/Navbar";
// import { Page } from "@/components/layout/Page";
// import MetaProgress from "@/components/organisms/MetaProgress";
// import FormStepper from "@/components/organisms/FormStepper";
// import { Mainform } from "@/forms/Mainform/Mainform";
// import { consultationSteps } from "@/lib/constants";
// import { HelperLane } from "@/components/organisms/HelperLane";

// const buildingFormSteps = [
//   { step: 1, title: "Grundinformationen" },
//   { step: 2, title: "Gebäudedetails" },
//   { step: 3, title: "Energiesystem" },
//   { step: 4, title: "Zusatzinformationen" },
// ];

// export const Erfassen = () => {
//   const [currentFormStep, setCurrentFormStep] = useState(1);
//   const navigate = useNavigate();

//   const handleConsultationStepChange = (step: number) => {
//     const targetStep = consultationSteps.find((s) => s.step === step);
//     if (targetStep) {
//       navigate(targetStep.path);
//     }
//   };

//   return (
//     <Page layoutType="default" header={<Navbar />}>
//       <div className="grid grid-cols-[15%_60%_25%] gap-6 mx-auto max-w-[1080px] px-4 pt-8">
//         <aside className="bg-muted/30 p-4 rounded-lg">
//           <MetaProgress steps={consultationSteps} />
//         </aside>

//         <main className="space-y-6">
//           <h2 className="text-2xl font-semibold mb-0">Datenerfassung</h2>
//           <p className="text-sm font-normal">
//             Erzählen Sie uns von Ihrem Gebäude
//           </p>

//           <div className="bg-card p-8 rounded-lg border space-y-6">
//             <FormStepper
//               steps={buildingFormSteps}
//               currentStep={currentFormStep}
//               onStepChange={setCurrentFormStep}
//             />

//             <Mainform
//               currentStep={currentFormStep}
//               onStepChange={setCurrentFormStep}
//               onConsultationStepChange={handleConsultationStepChange}
//             />
//           </div>
//         </main>

//         <HelperLane />
//       </div>
//     </Page>
//   );
// };
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
  { step: 1, title: "1. Haustyp wählen" },
  { step: 2, title: "2. Aktuelle Energieversorgung & Verbräuche angeben" },
  { step: 3, title: "3. Örtliche Möglichkeiten angeben" },
  { step: 4, title: "4. Empfehlungen für erneuerbare Energien vor Ort" },
  { step: 5, title: "5. Besichtigungstermin vereinbaren" },
  { step: 6, title: "6. Detaillierte technische Planung" },
  { step: 7, title: "7. Rechtliche Schritte" },
  { step: 8, title: "8. Fertiges Angebot" },
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

        <main className="space-y-6">
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
              onConsultationStepChange={handleConsultationStepChange}
            />
          </div>
        </main>

        <HelperLane />
      </div>
    </Page>
  );
};
