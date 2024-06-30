import Header from "./components/sections/header";
import Home from "./components/sections/home";
import AboutMe from "./components/sections/aboutMe";
import ExperienceAndEducations from "./components/sections/experiencesAndEducations";
// import Skills from "./components/sections/skills";
import ContactMe from "./components/sections/contanctMe";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Copyright from "./components/sections/copyright";
import Courses from "./components/sections/Courses";

function App() {
  return (
    <I18nextProvider i18n={i18n} style={{ fontFamily: "Georgia, sans-serif" }}>
      <Header />
      <Home />
      <AboutMe />
      <ExperienceAndEducations />
      <Courses/>
      {/* <Skills /> */}
      <ContactMe />
      <Copyright />
      {/* https://kitpro.site/femine/wp-content/uploads/sites/107/2022/08/pattern-3-268x1024.png */}
    </I18nextProvider>
  );
}

export default App;
