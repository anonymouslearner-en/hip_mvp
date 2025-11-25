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
