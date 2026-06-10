import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import InfraWidget from "./components/InfraWidget.jsx";
import SudoEasterEgg from "./components/SudoEasterEgg.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Homelab from "./pages/Homelab.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  const { pathname } = useLocation();

  // New page = scroll back to top. Reveal animations re-arm themselves
  // via a MutationObserver inside useReveal.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/homelab" element={<Homelab />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <InfraWidget />
      <SudoEasterEgg />
    </>
  );
}
