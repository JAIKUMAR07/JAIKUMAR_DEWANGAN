import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeSection } from "./components/homePage/homeSection/HomeSection";
import AboutPage from "./components/aboutPage/AboutPage";
import CredentialsPage from "./components/credentialsPage/CredentialsPage";
import ProjectsPage from "./components/projectsPage/ProjectsPage";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/credentials" element={<CredentialsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
