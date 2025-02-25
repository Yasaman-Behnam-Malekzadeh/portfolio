import React from "react";
import Header from "./components/sections/header";
import Home from "./components/sections/home";
import AboutMe from "./components/sections/aboutMe";
import ExperienceAndEducations from "./components/sections/experiencesAndEducations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Skills from "./components/sections/skills";
import ContactMe from "./components/sections/contanctMe";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Copyright from "./components/sections/copyright";
import Courses from "./components/sections/Courses";
import Blog from "./components/pages/blog/Blog";
import BlogItem from "./components/pages/blog/BlogItem";
    
function App() {
  return (
    <I18nextProvider i18n={i18n} style={{ fontFamily: "Georgia, sans-serif" }}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AboutMe />
                <ExperienceAndEducations />
                <Courses />
                {/* <Skills /> */}
                <ContactMe />
                <Copyright />
              </>
            }
          />
          <Route path="/myblog" element={<Blog />} />
          <Route path="myblog/:categoryId/:blogId" element={<BlogItem />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
