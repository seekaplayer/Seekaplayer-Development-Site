import React from "react";
import Header from "./templates/header/Header";
import MainSection from "./sections/mainsection/MainSection";
import Projects from "./sections/projects/Projects";
import Footer from "./templates/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
