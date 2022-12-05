import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
/* import ProgressBar from "./components/ProgressBar"; */
import Projects from "./components/Projects";
import SkillsProgressBar from "./components/SkillsProgressBar";

import Testimonials from "./components/Testimonials";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
{/*       <ProgressBar progress={50}/> */}
      <SkillsProgressBar />

      <Testimonials />
      <Contact />
    </main>
  );
}
