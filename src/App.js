import "./App.css";
import Header from "./components/sections/header";
import Home from "./components/sections/home";
import AboutMe from "./components/sections/aboutMe";
import ExperienceAndEducations from "./components/sections/experiencesAndEducations";
import Skills from "./components/sections/skills";
import ContactMe from "./components/sections/contanctMe";

function App() {
  return (
    <div style={{ fontFamily: "Georgia, sans-serif" }}>
      <Header />
      <Home />
      <AboutMe />
      <ExperienceAndEducations />
      <Skills />
      <ContactMe />
      {/* https://kitpro.site/femine/wp-content/uploads/sites/107/2022/08/pattern-3-268x1024.png */}
    </div>
  );
}

export default App;
