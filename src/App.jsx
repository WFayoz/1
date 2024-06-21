import React from "react";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/World";

const App = () => {
  return (
    <div>
      <div className="main__bg">
        <div className="backMoin">
            <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Portfolio />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
