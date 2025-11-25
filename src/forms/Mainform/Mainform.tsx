import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MainformProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const Mainform = ({ currentStep, onStepChange }: MainformProps) => {
  const handleNext = () => {
    if (currentStep < 4) {
      onStepChange(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Grundinformationen</h3>
            <p className="text-sm text-muted-foreground">
              Adresse, Gebäudetyp, Baujahr
            </p>
            {/* Add your form fields here */}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Gebäudedetails</h3>
            <p className="text-sm text-muted-foreground">
              Wohnfläche, Anzahl Stockwerke, Dämmung
            </p>
            {/* Add your form fields here */}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Energiesystem</h3>
            <p className="text-sm text-muted-foreground">
              Heizung, Warmwasser, Lüftung
            </p>
            {/* Add your form fields here */}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Zusatzinformationen</h3>
            <p className="text-sm text-muted-foreground">
              Besonderheiten, Wünsche, Anmerkungen
            </p>
            {/* Add your form fields here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderStepContent()}

      <div className="flex gap-4 justify-between pt-4">
        <Button
          onClick={handleBack}
          disabled={currentStep === 1}
          variant="outline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Zurück
        </Button>

        <Button onClick={handleNext} disabled={currentStep === 4}>
          Weiter
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
