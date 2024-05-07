import "./App.css";
import Header from "./components/sections/header";
import Home from "./components/sections/home";
import AboutMe from "./components/sections/aboutMe";
import ExperienceAndEducations from "./components/sections/experiencesAndEducations";
import Skills from "./components/sections/skills";
import ContactMe from "./components/sections/contanctMe";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const scrollspy = new window.bootstrap.ScrollSpy(document.body, {
  //     target: "#navbar",
  //   });

  //   return () => {
  //     scrollspy.dispose();
  //   };
  // }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <div style={{ fontFamily: "Georgia, sans-serif" }}>
        <Header />
        <Home />
        <AboutMe />
        <ExperienceAndEducations />
        <Skills />
        <ContactMe />

        {/* https://kitpro.site/femine/wp-content/uploads/sites/107/2022/08/pattern-3-268x1024.png */}
      </div>
    </I18nextProvider>
  );
}

export default App;
