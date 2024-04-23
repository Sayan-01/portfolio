import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx"
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from './components/Services.jsx'
import Skills from "./components/Skills.jsx";
// import Project from "./components/Project.jsx";
// import Contact from "./components/Contact.jsx";
// import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Skills />
        <Services />
        {/*<Project/>
        <Contact/>
        <Footer/> */}
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
