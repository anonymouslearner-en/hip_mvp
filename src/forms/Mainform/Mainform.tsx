// import { OptionGrid } from "@/components/organisms/OptionGrid";
// import { OptionTile } from "@/components/organisms/OptionTile";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Home,
//   Users,
//   Zap,
//   Warehouse,
//   Building2,
//   HelpCircle,
//   Sun,
//   Moon,
//   Calendar,
//   FileText,
//   CheckCircle,
// } from "lucide-react";
// import { useState, type FC } from "react";

// interface MainformProps {
//   currentStep: number;
//   onStepChange: (step: number) => void;
//   onConsultationStepChange: (step: number) => void;
// }

// export const Mainform: FC<MainformProps> = ({
//   currentStep,
//   onStepChange,
//   onConsultationStepChange,
// }) => {
//   const [formData, setFormData] = useState({
//     // Step 1: Haustyp wählen
//     houseType: "",

//     // Step 2: Aktuelle Energieversorgung & Verbräuche
//     currentEnergyProvider: "",
//     annualElectricityConsumption: "",
//     heatingType: "",
//     annualHeatingCosts: "",

//     // Step 3: Örtliche Möglichkeiten
//     roofType: "",
//     roofOrientation: "",
//     availableRoofArea: "",
//     shadingIssues: "",

//     // Step 4: Empfehlungen für erneuerbare Energien vor Ort
//     interestedInSolar: "",
//     interestedInHeatPump: "",
//     interestedInBattery: "",

//     // Step 5: Besichtigungstermin vereinbaren
//     preferredDate: "",
//     preferredTime: "",
//     contactName: "",
//     contactPhone: "",
//     contactEmail: "",

//     // Step 6: Detaillierte technische Planung
//     additionalRequirements: "",

//     // Step 7: Rechtliche Schritte
//     acknowledgePermits: false,

//     // Step 8: Fertiges Angebot
//     agreedToTerms: false,
//   });

//   const handleNext = () => {
//     if (currentStep < 4) {
//       onStepChange(currentStep + 1);
//     } else {
//       // When all form steps are complete, move to next consultation step
//       onConsultationStepChange(2);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       onStepChange(currentStep - 1);
//     }
//   };

//   const updateFormData = (key: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         // Step 1: Haustyp wählen
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">1. Haustyp wählen</h2>
//               <p className="text-muted-foreground">
//                 In welchem Haustyp wohnen Sie?
//               </p>
//             </div>
//             <OptionGrid columns={3}>
//               <OptionTile
//                 icon={<Home />}
//                 label="Reihenhaus"
//                 value="reihenhaus"
//                 selected={formData.houseType === "reihenhaus"}
//                 onClick={(value) => updateFormData("houseType", value)}
//               />
//               <OptionTile
//                 icon={<Building2 />}
//                 label="Doppelhaushälfte"
//                 value="doppelhaus"
//                 selected={formData.houseType === "doppelhaus"}
//                 onClick={(value) => updateFormData("houseType", value)}
//               />
//               <OptionTile
//                 icon={<Home />}
//                 label="Einfamilienhaus"
//                 value="einfamilienhaus"
//                 selected={formData.houseType === "einfamilienhaus"}
//                 onClick={(value) => updateFormData("houseType", value)}
//               />
//               <OptionTile
//                 icon={<Warehouse />}
//                 label="Gewerbe"
//                 value="gewerbe"
//                 selected={formData.houseType === "gewerbe"}
//                 onClick={(value) => updateFormData("houseType", value)}
//               />
//               <OptionTile
//                 icon={<Building2 />}
//                 label="Mehrfamilienhaus"
//                 value="mehrfamilienhaus"
//                 selected={formData.houseType === "mehrfamilienhaus"}
//                 onClick={(value) => updateFormData("houseType", value)}
//               />
//               <OptionTile
//                 icon={<HelpCircle />}
//                 label="Anderes"
//                 value="anderes"
//                 selected={formData.houseType === "anderes"}
//                 onClick={(value) => updateFormData("houseType", value)}
//               />
//             </OptionGrid>
//           </div>
//         );

//       case 2:
//         // Step 2: Aktuelle Energieversorgung & Verbräuche angeben
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">
//                 2. Aktuelle Energieversorgung & Verbräuche angeben
//               </h2>
//               <p className="text-muted-foreground">
//                 Helfen Sie uns, Ihren aktuellen Energieverbrauch zu verstehen
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Aktueller Stromanbieter
//                 </label>
//                 <Input
//                   type="text"
//                   placeholder="z.B. Stadtwerke"
//                   value={formData.currentEnergyProvider}
//                   onChange={(e) =>
//                     updateFormData("currentEnergyProvider", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Jährlicher Stromverbrauch (kWh)
//                 </label>
//                 <Input
//                   type="number"
//                   placeholder="z.B. 4500"
//                   value={formData.annualElectricityConsumption}
//                   onChange={(e) =>
//                     updateFormData(
//                       "annualElectricityConsumption",
//                       e.target.value
//                     )
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Heizungsart</label>
//                 <OptionGrid>
//                   <OptionTile
//                     icon={<Zap />}
//                     label="Gas"
//                     value="gas"
//                     selected={formData.heatingType === "gas"}
//                     onClick={(value) => updateFormData("heatingType", value)}
//                   />
//                   <OptionTile
//                     icon={<Zap />}
//                     label="Öl"
//                     value="oil"
//                     selected={formData.heatingType === "oil"}
//                     onClick={(value) => updateFormData("heatingType", value)}
//                   />
//                   <OptionTile
//                     icon={<Zap />}
//                     label="Wärmepumpe"
//                     value="heatpump"
//                     selected={formData.heatingType === "heatpump"}
//                     onClick={(value) => updateFormData("heatingType", value)}
//                   />
//                   <OptionTile
//                     icon={<HelpCircle />}
//                     label="Anderes"
//                     value="other"
//                     selected={formData.heatingType === "other"}
//                     onClick={(value) => updateFormData("heatingType", value)}
//                   />
//                 </OptionGrid>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Jährliche Heizkosten (€)
//                 </label>
//                 <Input
//                   type="number"
//                   placeholder="z.B. 2400"
//                   value={formData.annualHeatingCosts}
//                   onChange={(e) =>
//                     updateFormData("annualHeatingCosts", e.target.value)
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case 3:
//         // Step 3: Örtliche Möglichkeiten angeben
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">
//                 3. Örtliche Möglichkeiten angeben
//               </h2>
//               <p className="text-muted-foreground">
//                 Informationen zu Ihrer Immobilie
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Dachform</label>
//                 <OptionGrid>
//                   <OptionTile
//                     icon="⌂"
//                     label="Satteldach"
//                     value="satteldach"
//                     selected={formData.roofType === "satteldach"}
//                     onClick={(value) => updateFormData("roofType", value)}
//                   />
//                   <OptionTile
//                     icon="▭"
//                     label="Flachdach"
//                     value="flachdach"
//                     selected={formData.roofType === "flachdach"}
//                     onClick={(value) => updateFormData("roofType", value)}
//                   />
//                   <OptionTile
//                     icon="⌂"
//                     label="Pultdach"
//                     value="pultdach"
//                     selected={formData.roofType === "pultdach"}
//                     onClick={(value) => updateFormData("roofType", value)}
//                   />
//                   <OptionTile
//                     icon={<HelpCircle />}
//                     label="Anderes"
//                     value="other"
//                     selected={formData.roofType === "other"}
//                     onClick={(value) => updateFormData("roofType", value)}
//                   />
//                 </OptionGrid>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Dachausrichtung</label>
//                 <OptionGrid columns={3}>
//                   <OptionTile
//                     icon={<Sun />}
//                     label="Süd"
//                     value="south"
//                     selected={formData.roofOrientation === "south"}
//                     onClick={(value) =>
//                       updateFormData("roofOrientation", value)
//                     }
//                   />
//                   <OptionTile
//                     icon={<Sun />}
//                     label="Ost/West"
//                     value="east_west"
//                     selected={formData.roofOrientation === "east_west"}
//                     onClick={(value) =>
//                       updateFormData("roofOrientation", value)
//                     }
//                   />
//                   <OptionTile
//                     icon={<Moon />}
//                     label="Nord"
//                     value="north"
//                     selected={formData.roofOrientation === "north"}
//                     onClick={(value) =>
//                       updateFormData("roofOrientation", value)
//                     }
//                   />
//                 </OptionGrid>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Verfügbare Dachfläche (m²)
//                 </label>
//                 <Input
//                   type="number"
//                   placeholder="z.B. 50"
//                   value={formData.availableRoofArea}
//                   onChange={(e) =>
//                     updateFormData("availableRoofArea", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Verschattungsprobleme?
//                 </label>
//                 <OptionGrid>
//                   <OptionTile
//                     icon="✓"
//                     label="Nein"
//                     value="no"
//                     selected={formData.shadingIssues === "no"}
//                     onClick={(value) => updateFormData("shadingIssues", value)}
//                   />
//                   <OptionTile
//                     icon="✕"
//                     label="Ja"
//                     value="yes"
//                     selected={formData.shadingIssues === "yes"}
//                     onClick={(value) => updateFormData("shadingIssues", value)}
//                   />
//                 </OptionGrid>
//               </div>
//             </div>
//           </div>
//         );

//       case 4:
//         // Step 4: Empfehlungen für erneuerbare Energien vor Ort
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">
//                 4. Empfehlungen für erneuerbare Energien vor Ort
//               </h2>
//               <p className="text-muted-foreground">
//                 Wählen Sie die Technologien, die Sie interessieren
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Photovoltaik-Anlage
//                 </label>
//                 <OptionGrid>
//                   <OptionTile
//                     icon={<Sun />}
//                     label="Ja, interessiert"
//                     value="yes"
//                     selected={formData.interestedInSolar === "yes"}
//                     onClick={(value) =>
//                       updateFormData("interestedInSolar", value)
//                     }
//                   />
//                   <OptionTile
//                     icon={<HelpCircle />}
//                     label="Nein"
//                     value="no"
//                     selected={formData.interestedInSolar === "no"}
//                     onClick={(value) =>
//                       updateFormData("interestedInSolar", value)
//                     }
//                   />
//                 </OptionGrid>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Wärmepumpe</label>
//                 <OptionGrid>
//                   <OptionTile
//                     icon={<Zap />}
//                     label="Ja, interessiert"
//                     value="yes"
//                     selected={formData.interestedInHeatPump === "yes"}
//                     onClick={(value) =>
//                       updateFormData("interestedInHeatPump", value)
//                     }
//                   />
//                   <OptionTile
//                     icon={<HelpCircle />}
//                     label="Nein"
//                     value="no"
//                     selected={formData.interestedInHeatPump === "no"}
//                     onClick={(value) =>
//                       updateFormData("interestedInHeatPump", value)
//                     }
//                   />
//                 </OptionGrid>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Batteriespeicher</label>
//                 <OptionGrid>
//                   <OptionTile
//                     icon={<Zap />}
//                     label="Ja, interessiert"
//                     value="yes"
//                     selected={formData.interestedInBattery === "yes"}
//                     onClick={(value) =>
//                       updateFormData("interestedInBattery", value)
//                     }
//                   />
//                   <OptionTile
//                     icon={<HelpCircle />}
//                     label="Nein"
//                     value="no"
//                     selected={formData.interestedInBattery === "no"}
//                     onClick={(value) =>
//                       updateFormData("interestedInBattery", value)
//                     }
//                   />
//                 </OptionGrid>
//               </div>
//             </div>
//           </div>
//         );

//       case 5:
//         // Step 5: Besichtigungstermin vereinbaren
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">
//                 5. Besichtigungstermin vereinbaren
//               </h2>
//               <p className="text-muted-foreground">
//                 Vereinbaren Sie einen Termin für die Vor-Ort-Besichtigung
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Wunschdatum</label>
//                 <Input
//                   type="date"
//                   value={formData.preferredDate}
//                   onChange={(e) =>
//                     updateFormData("preferredDate", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Wunschuhrzeit</label>
//                 <OptionGrid columns={3}>
//                   <OptionTile
//                     icon={<Sun />}
//                     label="Vormittag"
//                     value="morning"
//                     selected={formData.preferredTime === "morning"}
//                     onClick={(value) => updateFormData("preferredTime", value)}
//                   />
//                   <OptionTile
//                     icon={<Sun />}
//                     label="Mittag"
//                     value="noon"
//                     selected={formData.preferredTime === "noon"}
//                     onClick={(value) => updateFormData("preferredTime", value)}
//                   />
//                   <OptionTile
//                     icon={<Moon />}
//                     label="Nachmittag"
//                     value="afternoon"
//                     selected={formData.preferredTime === "afternoon"}
//                     onClick={(value) => updateFormData("preferredTime", value)}
//                   />
//                 </OptionGrid>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Ihr Name</label>
//                 <Input
//                   type="text"
//                   placeholder="Max Mustermann"
//                   value={formData.contactName}
//                   onChange={(e) =>
//                     updateFormData("contactName", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Telefonnummer</label>
//                 <Input
//                   type="tel"
//                   placeholder="+49 123 456789"
//                   value={formData.contactPhone}
//                   onChange={(e) =>
//                     updateFormData("contactPhone", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">E-Mail-Adresse</label>
//                 <Input
//                   type="email"
//                   placeholder="max@beispiel.de"
//                   value={formData.contactEmail}
//                   onChange={(e) =>
//                     updateFormData("contactEmail", e.target.value)
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case 6:
//         // Step 6: Detaillierte technische Planung
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">
//                 6. Detaillierte technische Planung
//               </h2>
//               <p className="text-muted-foreground">
//                 Teilen Sie uns weitere Details und Anforderungen mit
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">
//                   Zusätzliche Anforderungen oder Wünsche
//                 </label>
//                 <Textarea
//                   placeholder="Beschreiben Sie besondere Anforderungen, Wünsche oder Fragen..."
//                   rows={6}
//                   value={formData.additionalRequirements}
//                   onChange={(e) =>
//                     updateFormData("additionalRequirements", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="p-4 bg-muted rounded-lg">
//                 <p className="text-sm text-muted-foreground">
//                   Nach Ihrer Bestätigung erstellen wir eine detaillierte
//                   technische Planung basierend auf den vor Ort gesammelten
//                   Informationen.
//                 </p>
//               </div>
//             </div>
//           </div>
//         );

//       case 7:
//         // Step 7: Rechtliche Schritte
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-bold">7. Rechtliche Schritte</h2>
//               <p className="text-muted-foreground">
//                 Wichtige rechtliche Informationen und Genehmigungen
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="p-4 bg-muted rounded-lg space-y-4">
//                 <div className="flex items-start gap-3">
//                   <FileText className="mt-1 text-primary" />
//                   <div className="space-y-1">
//                     <h3 className="font-medium">Baugenehmigung</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Wir kümmern uns um alle erforderlichen Genehmigungen bei
//                       Ihrer Kommune.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FileText className="mt-1 text-primary" />
//                   <div className="space-y-1">
//                     <h3 className="font-medium">Netzbetreiber-Anmeldung</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Registrierung Ihrer Anlage beim zuständigen Netzbetreiber.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FileText className="mt-1 text-primary" />
//                   <div className="space-y-1">
//                     <h3 className="font-medium">Förderanträge</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Unterstützung bei der Beantragung verfügbarer Förderungen.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={formData.acknowledgePermits}
//                     onChange={(e) =>
//                       updateFormData("acknowledgePermits", e.target.checked)
//                     }
//                     className="w-4 h-4"
//                   />
//                   <span className="text-sm">
//                     Ich bestätige, dass ich über die erforderlichen rechtlichen
//                     Schritte informiert wurde
//                   </span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         );

//       case 8:
//         // Step 8: Fertiges Angebot
//         return (
//           <div className="space-y-6">
//             <div className="text-center space-y-2">
//               <CheckCircle className="w-16 h-16 mx-auto text-primary" />
//               <h2 className="text-2xl font-bold">8. Fertiges Angebot</h2>
//               <p className="text-muted-foreground">
//                 Ihr individuelles Angebot ist bereit
//               </p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto">
//               <div className="p-6 bg-primary/5 border-2 border-primary rounded-lg space-y-4">
//                 <h3 className="font-semibold text-lg">Ihr Angebot umfasst:</h3>
//                 <ul className="space-y-2 text-sm">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
//                     <span>
//                       Photovoltaik-Anlage mit optimaler Dimensionierung
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
//                     <span>Installation und Inbetriebnahme</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
//                     <span>Komplette Dokumentation und Genehmigungen</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
//                     <span>Wartungsvertrag (optional)</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
//                     <span>10 Jahre Herstellergarantie</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={formData.agreedToTerms}
//                     onChange={(e) =>
//                       updateFormData("agreedToTerms", e.target.checked)
//                     }
//                     className="w-4 h-4"
//                   />
//                   <span className="text-sm">
//                     Ich akzeptiere die Allgemeinen Geschäftsbedingungen und
//                     möchte das Angebot annehmen
//                   </span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="space-y-6 pt-6">
//       {renderStepContent()}

//       <div className="flex gap-4 justify-between pt-4">
//         <Button
//           onClick={handleBack}
//           disabled={currentStep === 1}
//           variant="outline"
//         >
//           <ChevronLeft className="mr-2 h-4 w-4" />
//           Zurück
//         </Button>

//         <Button onClick={handleNext} disabled={currentStep === 4}>
//           Weiter
//           <ChevronRight className="ml-2 h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// };

import { OptionGrid } from "@/components/organisms/OptionGrid";
import { OptionTile } from "@/components/organisms/OptionTile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Zap,
  Warehouse,
  Building2,
  HelpCircle,
  Sun,
  Moon,
  FileText,
  CheckCircle,
} from "lucide-react";
import { useState, type FC } from "react";

interface MainformProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  onConsultationStepChange: (step: number) => void;
}

export const Mainform: FC<MainformProps> = ({
  currentStep,
  onStepChange,
  onConsultationStepChange,
}) => {
  const [formData, setFormData] = useState({
    // Step 1: Haustyp wählen
    houseType: "",

    // Step 2: Aktuelle Energieversorgung & Verbräuche
    currentEnergyProvider: "",
    annualElectricityConsumption: "",
    heatingType: "",
    annualHeatingCosts: "",

    // Step 3: Örtliche Möglichkeiten
    roofType: "",
    roofOrientation: "",
    availableRoofArea: "",
    shadingIssues: "",

    // Step 4: Empfehlungen für erneuerbare Energien vor Ort
    interestedInSolar: "",
    interestedInHeatPump: "",
    interestedInBattery: "",

    // Step 5: Besichtigungstermin vereinbaren
    preferredDate: "",
    preferredTime: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",

    // Step 6: Detaillierte technische Planung
    additionalRequirements: "",

    // Step 7: Rechtliche Schritte
    acknowledgePermits: false,

    // Step 8: Fertiges Angebot
    agreedToTerms: false,
  });

  const handleNext = () => {
    if (currentStep < 8) {
      onStepChange(currentStep + 1);
    } else {
      // When all form steps are complete, move to next consultation step
      onConsultationStepChange(2);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  const updateFormData = (key: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        // Step 1: Haustyp wählen
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">1. Haustyp wählen</h2>
              <p className="text-muted-foreground">
                In welchem Haustyp wohnen Sie?
              </p>
            </div>
            <OptionGrid columns={3}>
              <OptionTile
                icon={<Home />}
                label="Reihenhaus"
                value="reihenhaus"
                selected={formData.houseType === "reihenhaus"}
                onClick={(value) => updateFormData("houseType", value)}
              />
              <OptionTile
                icon={<Building2 />}
                label="Doppelhaushälfte"
                value="doppelhaus"
                selected={formData.houseType === "doppelhaus"}
                onClick={(value) => updateFormData("houseType", value)}
              />
              <OptionTile
                icon={<Home />}
                label="Einfamilienhaus"
                value="einfamilienhaus"
                selected={formData.houseType === "einfamilienhaus"}
                onClick={(value) => updateFormData("houseType", value)}
              />
              <OptionTile
                icon={<Warehouse />}
                label="Gewerbe"
                value="gewerbe"
                selected={formData.houseType === "gewerbe"}
                onClick={(value) => updateFormData("houseType", value)}
              />
              <OptionTile
                icon={<Building2 />}
                label="Mehrfamilienhaus"
                value="mehrfamilienhaus"
                selected={formData.houseType === "mehrfamilienhaus"}
                onClick={(value) => updateFormData("houseType", value)}
              />
              <OptionTile
                icon={<HelpCircle />}
                label="Anderes"
                value="anderes"
                selected={formData.houseType === "anderes"}
                onClick={(value) => updateFormData("houseType", value)}
              />
            </OptionGrid>
          </div>
        );

      case 2:
        // Step 2: Aktuelle Energieversorgung & Verbräuche angeben
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                2. Aktuelle Energieversorgung & Verbräuche angeben
              </h2>
              <p className="text-muted-foreground">
                Helfen Sie uns, Ihren aktuellen Energieverbrauch zu verstehen
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Aktueller Stromanbieter
                </label>
                <Input
                  type="text"
                  placeholder="z.B. Stadtwerke"
                  value={formData.currentEnergyProvider}
                  onChange={(e) =>
                    updateFormData("currentEnergyProvider", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Jährlicher Stromverbrauch (kWh)
                </label>
                <Input
                  type="number"
                  placeholder="z.B. 4500"
                  value={formData.annualElectricityConsumption}
                  onChange={(e) =>
                    updateFormData(
                      "annualElectricityConsumption",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Heizungsart</label>
                <OptionGrid>
                  <OptionTile
                    icon={<Zap />}
                    label="Gas"
                    value="gas"
                    selected={formData.heatingType === "gas"}
                    onClick={(value) => updateFormData("heatingType", value)}
                  />
                  <OptionTile
                    icon={<Zap />}
                    label="Öl"
                    value="oil"
                    selected={formData.heatingType === "oil"}
                    onClick={(value) => updateFormData("heatingType", value)}
                  />
                  <OptionTile
                    icon={<Zap />}
                    label="Wärmepumpe"
                    value="heatpump"
                    selected={formData.heatingType === "heatpump"}
                    onClick={(value) => updateFormData("heatingType", value)}
                  />
                  <OptionTile
                    icon={<HelpCircle />}
                    label="Anderes"
                    value="other"
                    selected={formData.heatingType === "other"}
                    onClick={(value) => updateFormData("heatingType", value)}
                  />
                </OptionGrid>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Jährliche Heizkosten (€)
                </label>
                <Input
                  type="number"
                  placeholder="z.B. 2400"
                  value={formData.annualHeatingCosts}
                  onChange={(e) =>
                    updateFormData("annualHeatingCosts", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        );

      case 3:
        // Step 3: Örtliche Möglichkeiten angeben
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                3. Örtliche Möglichkeiten angeben
              </h2>
              <p className="text-muted-foreground">
                Informationen zu Ihrer Immobilie
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">Dachform</label>
                <OptionGrid>
                  <OptionTile
                    icon="⌂"
                    label="Satteldach"
                    value="satteldach"
                    selected={formData.roofType === "satteldach"}
                    onClick={(value) => updateFormData("roofType", value)}
                  />
                  <OptionTile
                    icon="▭"
                    label="Flachdach"
                    value="flachdach"
                    selected={formData.roofType === "flachdach"}
                    onClick={(value) => updateFormData("roofType", value)}
                  />
                  <OptionTile
                    icon="⌂"
                    label="Pultdach"
                    value="pultdach"
                    selected={formData.roofType === "pultdach"}
                    onClick={(value) => updateFormData("roofType", value)}
                  />
                  <OptionTile
                    icon={<HelpCircle />}
                    label="Anderes"
                    value="other"
                    selected={formData.roofType === "other"}
                    onClick={(value) => updateFormData("roofType", value)}
                  />
                </OptionGrid>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Dachausrichtung</label>
                <OptionGrid columns={3}>
                  <OptionTile
                    icon={<Sun />}
                    label="Süd"
                    value="south"
                    selected={formData.roofOrientation === "south"}
                    onClick={(value) =>
                      updateFormData("roofOrientation", value)
                    }
                  />
                  <OptionTile
                    icon={<Sun />}
                    label="Ost/West"
                    value="east_west"
                    selected={formData.roofOrientation === "east_west"}
                    onClick={(value) =>
                      updateFormData("roofOrientation", value)
                    }
                  />
                  <OptionTile
                    icon={<Moon />}
                    label="Nord"
                    value="north"
                    selected={formData.roofOrientation === "north"}
                    onClick={(value) =>
                      updateFormData("roofOrientation", value)
                    }
                  />
                </OptionGrid>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Verfügbare Dachfläche (m²)
                </label>
                <Input
                  type="number"
                  placeholder="z.B. 50"
                  value={formData.availableRoofArea}
                  onChange={(e) =>
                    updateFormData("availableRoofArea", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Verschattungsprobleme?
                </label>
                <OptionGrid>
                  <OptionTile
                    icon="✓"
                    label="Nein"
                    value="no"
                    selected={formData.shadingIssues === "no"}
                    onClick={(value) => updateFormData("shadingIssues", value)}
                  />
                  <OptionTile
                    icon="✕"
                    label="Ja"
                    value="yes"
                    selected={formData.shadingIssues === "yes"}
                    onClick={(value) => updateFormData("shadingIssues", value)}
                  />
                </OptionGrid>
              </div>
            </div>
          </div>
        );

      case 4:
        // Step 4: Empfehlungen für erneuerbare Energien vor Ort
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                4. Empfehlungen für erneuerbare Energien vor Ort
              </h2>
              <p className="text-muted-foreground">
                Wählen Sie die Technologien, die Sie interessieren
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Photovoltaik-Anlage
                </label>
                <OptionGrid>
                  <OptionTile
                    icon={<Sun />}
                    label="Ja, interessiert"
                    value="yes"
                    selected={formData.interestedInSolar === "yes"}
                    onClick={(value) =>
                      updateFormData("interestedInSolar", value)
                    }
                  />
                  <OptionTile
                    icon={<HelpCircle />}
                    label="Nein"
                    value="no"
                    selected={formData.interestedInSolar === "no"}
                    onClick={(value) =>
                      updateFormData("interestedInSolar", value)
                    }
                  />
                </OptionGrid>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Wärmepumpe</label>
                <OptionGrid>
                  <OptionTile
                    icon={<Zap />}
                    label="Ja, interessiert"
                    value="yes"
                    selected={formData.interestedInHeatPump === "yes"}
                    onClick={(value) =>
                      updateFormData("interestedInHeatPump", value)
                    }
                  />
                  <OptionTile
                    icon={<HelpCircle />}
                    label="Nein"
                    value="no"
                    selected={formData.interestedInHeatPump === "no"}
                    onClick={(value) =>
                      updateFormData("interestedInHeatPump", value)
                    }
                  />
                </OptionGrid>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Batteriespeicher</label>
                <OptionGrid>
                  <OptionTile
                    icon={<Zap />}
                    label="Ja, interessiert"
                    value="yes"
                    selected={formData.interestedInBattery === "yes"}
                    onClick={(value) =>
                      updateFormData("interestedInBattery", value)
                    }
                  />
                  <OptionTile
                    icon={<HelpCircle />}
                    label="Nein"
                    value="no"
                    selected={formData.interestedInBattery === "no"}
                    onClick={(value) =>
                      updateFormData("interestedInBattery", value)
                    }
                  />
                </OptionGrid>
              </div>
            </div>
          </div>
        );

      case 5:
        // Step 5: Besichtigungstermin vereinbaren
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                5. Besichtigungstermin vereinbaren
              </h2>
              <p className="text-muted-foreground">
                Vereinbaren Sie einen Termin für die Vor-Ort-Besichtigung
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">Wunschdatum</label>
                <Input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    updateFormData("preferredDate", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Wunschuhrzeit</label>
                <OptionGrid columns={3}>
                  <OptionTile
                    icon={<Sun />}
                    label="Vormittag"
                    value="morning"
                    selected={formData.preferredTime === "morning"}
                    onClick={(value) => updateFormData("preferredTime", value)}
                  />
                  <OptionTile
                    icon={<Sun />}
                    label="Mittag"
                    value="noon"
                    selected={formData.preferredTime === "noon"}
                    onClick={(value) => updateFormData("preferredTime", value)}
                  />
                  <OptionTile
                    icon={<Moon />}
                    label="Nachmittag"
                    value="afternoon"
                    selected={formData.preferredTime === "afternoon"}
                    onClick={(value) => updateFormData("preferredTime", value)}
                  />
                </OptionGrid>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Ihr Name</label>
                <Input
                  type="text"
                  placeholder="Max Mustermann"
                  value={formData.contactName}
                  onChange={(e) =>
                    updateFormData("contactName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Telefonnummer</label>
                <Input
                  type="tel"
                  placeholder="+49 123 456789"
                  value={formData.contactPhone}
                  onChange={(e) =>
                    updateFormData("contactPhone", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-Mail-Adresse</label>
                <Input
                  type="email"
                  placeholder="max@beispiel.de"
                  value={formData.contactEmail}
                  onChange={(e) =>
                    updateFormData("contactEmail", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        );

      case 6:
        // Step 6: Detaillierte technische Planung
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                6. Detaillierte technische Planung
              </h2>
              <p className="text-muted-foreground">
                Teilen Sie uns weitere Details und Anforderungen mit
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Zusätzliche Anforderungen oder Wünsche
                </label>
                <Textarea
                  placeholder="Beschreiben Sie besondere Anforderungen, Wünsche oder Fragen..."
                  rows={6}
                  value={formData.additionalRequirements}
                  onChange={(e) =>
                    updateFormData("additionalRequirements", e.target.value)
                  }
                />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Nach Ihrer Bestätigung erstellen wir eine detaillierte
                  technische Planung basierend auf den vor Ort gesammelten
                  Informationen.
                </p>
              </div>
            </div>
          </div>
        );

      case 7:
        // Step 7: Rechtliche Schritte
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">7. Rechtliche Schritte</h2>
              <p className="text-muted-foreground">
                Wichtige rechtliche Informationen und Genehmigungen
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="p-4 bg-muted rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="mt-1 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Baugenehmigung</h3>
                    <p className="text-sm text-muted-foreground">
                      Wir kümmern uns um alle erforderlichen Genehmigungen bei
                      Ihrer Kommune.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="mt-1 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Netzbetreiber-Anmeldung</h3>
                    <p className="text-sm text-muted-foreground">
                      Registrierung Ihrer Anlage beim zuständigen Netzbetreiber.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="mt-1 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Förderanträge</h3>
                    <p className="text-sm text-muted-foreground">
                      Unterstützung bei der Beantragung verfügbarer Förderungen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acknowledgePermits}
                    onChange={(e) =>
                      updateFormData("acknowledgePermits", e.target.checked)
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-sm">
                    Ich bestätige, dass ich über die erforderlichen rechtlichen
                    Schritte informiert wurde
                  </span>
                </label>
              </div>
            </div>
          </div>
        );

      case 8:
        // Step 8: Fertiges Angebot
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <CheckCircle className="w-16 h-16 mx-auto text-primary" />
              <h2 className="text-2xl font-bold">8. Fertiges Angebot</h2>
              <p className="text-muted-foreground">
                Ihr individuelles Angebot ist bereit
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="p-6 bg-primary/5 border-2 border-primary rounded-lg space-y-4">
                <h3 className="font-semibold text-lg">Ihr Angebot umfasst:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>
                      Photovoltaik-Anlage mit optimaler Dimensionierung
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>Installation und Inbetriebnahme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>Komplette Dokumentation und Genehmigungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>Wartungsvertrag (optional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>10 Jahre Herstellergarantie</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedToTerms}
                    onChange={(e) =>
                      updateFormData("agreedToTerms", e.target.checked)
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-sm">
                    Ich akzeptiere die Allgemeinen Geschäftsbedingungen und
                    möchte das Angebot annehmen
                  </span>
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 pt-6">
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

        <Button onClick={handleNext} disabled={currentStep === 8}>
          {currentStep === 8 ? "Angebot annehmen" : "Weiter"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
