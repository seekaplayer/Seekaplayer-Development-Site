import React from "react";
import Header from "./templates/header/Header";
import MainSection from "./sections/mainsection/MainSection";
import Projects from "./sections/projects/Projects";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Projects />
    </>
  );
};

export default App;
