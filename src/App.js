import "./App.css";
import Header from "./components/sections/header";
import Home from "./components/sections/home";
import AboutMe from "./components/sections/aboutMe";
import ExperienceAndEducations from "./components/sections/experiencesAndEducations";
import Skills from "./components/sections/skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <ExperienceAndEducations />
      <Skills />

      {/* https://kitpro.site/femine/wp-content/uploads/sites/107/2022/08/pattern-3-268x1024.png */}
    </>
  );
}

export default App;
