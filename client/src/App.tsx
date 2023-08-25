import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurWorkPage from "./pages/OurWorkPage";
import Alumni from "./pages/Alumni";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DontationPage from "./pages/DontationPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { getProjects } from "./actions/projectsAction";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect here here");

    dispatch(getProjects());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/acheivements" element={<OurWorkPage />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />

        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DontationPage />} />
      </Routes>
    </Router>
  );
}

export default App;