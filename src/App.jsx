import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { DistrictsPage } from "./pages/DistrictsPage";
import { MonitorPage } from "./pages/MonitorPage";
import { OverviewPage } from "./pages/OverviewPage";
import { ArchitecturePage } from "./pages/ArchitecturePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ResultsPage } from "./pages/ResultsPage";
import { ContactPage } from "./pages/ContactPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/districts" element={<DistrictsPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
