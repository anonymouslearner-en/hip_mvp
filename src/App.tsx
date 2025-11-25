import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Erfassen } from "./views/Erfassen";
import "./App.css";
import { Beratung } from "./views/Beratung";
import { Auftrag } from "./views/Auftrag";

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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/erfassen" replace />} />
        <Route path="/erfassen" element={<Erfassen />} />
        <Route path="/beratung" element={<Beratung />} />
        <Route path="/auftrag" element={<Auftrag />} />
      </Routes>
    </Router>
  );
};

export default App;
