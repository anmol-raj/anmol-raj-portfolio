import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Experience from "./components/experience/experience.component";
import Feedbacks from "./components/feedbacks/feedbacks.component";
import Hero from "./components/hero/hero.component";
import Tech from "./components/tech/tech.component";
import Works from "./components/works/works.component";
import StarsCanvas from "./components/starscanvas/starscanvas.component";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
