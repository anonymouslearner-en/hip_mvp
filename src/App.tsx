import { useState } from "react";
import "./App.css";
import { Erfassen } from "./views/Erfassen";

export const consultationSteps = [
  { id: 1, title: "Erfassung", description: "Gebäudedaten erfassen" },
  { id: 2, title: "Beratung", description: "Empfehlungen für Ihr Gebäude" },
  {
    id: 3,
    title: "Auftrag",
    description: "Anfrage abschließen und Termin buchen",
  },
];

export const App = () => {
  const [currentConsultationStep, setCurrentConsultationStep] = useState(1);

  return (
    <>
      <Erfassen
        consultationStep={currentConsultationStep}
        onConsultationStepChange={setCurrentConsultationStep}
      />
    </>
  );
};

export default App;
