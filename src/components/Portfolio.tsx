import React from "react";

import Intro from "./Intro";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Header from "./Header";

const Portfolio = () => {
  return (
    <div className="w-full font-sans  ">
      {/* Navbar */}
      <div className="w-full mt-10">
        <Header />
      </div>
      <Intro/>
      <Projects/>
      <Technologies/>
    </div>
  );
};

export default Portfolio;
