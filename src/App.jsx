import { Link } from 'react-scroll'; // Import Link from react-scroll
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import HireMePage from './pages/HireMePage';
import NavaBarUI from './components/NavaBarUI';
import ServicesPage from './pages/ServicePage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavaBarUI />
      <HomePage id="home" />
      <ServicesPage id="services" />
      <SkillsPage id="skills" />
      <ProjectsPage id="projects" />
      <HireMePage id="hireme" />
      <Footer />  {/* Add Footer here */}
    </div>
  );
}

export default App;

