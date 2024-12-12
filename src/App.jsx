import React, { useState, useMemo } from "react";
import SuspenseWrapper from "./components/SuspenceWrapper";

// Lazy load pages and components
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SkillsPage = React.lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const HireMePage = React.lazy(() => import("./pages/HireMePage"));
const NavaBarUI = React.lazy(() => import("./components/NavaBarUI"));
const Footer = React.lazy(() => import("./components/Footer"));
const ServicesPage = React.lazy(() => import("./pages/ServicePage"));
const Menu = React.lazy(() => import("./components/menu"));
const BackgroundEffects = {
  bubbles: React.lazy(() => import("./components/Bubbles")),
  snow: React.lazy(() => import("./components/christmas/SnowFlakes")),
  particles: React.lazy(() => import("./components/particles/ParticlesEfect")),
  raineffect: React.lazy(() => import("./components/RainEffect")),
  consffect: React.lazy(() => import("./components/ConstellationEffect")),
  blast: React.lazy(() => import("./components/Blast")),
};

function App() {
  const [background, setBackground] = useState("");

  const stopBackground = () => setBackground(""); // Stop background animation

  const BackgroundComponent = useMemo(() => {
    return BackgroundEffects[background] || null;
  }, [background]);

  return (
    <div>
      {/* Use SuspenseWrapper for common Suspense handling */}
      <SuspenseWrapper>
        <NavaBarUI />
        <Menu setBackground={setBackground} stopBackground={stopBackground} />
      </SuspenseWrapper>

      {/* Background effect rendered dynamically */}
      {BackgroundComponent && (
        <SuspenseWrapper>
          <BackgroundComponent />
        </SuspenseWrapper>
      )}

      {/* Pages rendered with lazy loading */}
      <SuspenseWrapper>
        <HomePage id="home" />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <ServicesPage id="services" />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <SkillsPage id="skills" />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <ProjectsPage id="projects" />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <HireMePage id="hireme" />
      </SuspenseWrapper>
      <Footer />
    </div>
  );
}

export default App;
