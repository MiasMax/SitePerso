import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import InfraWidget from "./components/InfraWidget.jsx";
import SudoEasterEgg from "./components/SudoEasterEgg.jsx";
import useDayNight from "./hooks/useDayNight.js";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useDayNight();
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <InfraWidget />
      <SudoEasterEgg />
    </>
  );
}
