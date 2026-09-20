import { useCallback, useState } from 'react';
import Hud from './components/Hud.jsx';
import Hero from './components/Hero.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Participation from './components/Participation.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import CertificateStrip from './components/CertificateStrip.jsx';
import Ending from './components/Ending.jsx';
import Runner from './components/Runner.jsx';
import { SECTIONS } from './sections.js';

export default function App() {
  const [current, setCurrent] = useState(0);
  const [collected, setCollected] = useState(() => new Set());

  // Reaching a checkpoint collects its coin (and any coin you walked past).
  const reach = useCallback((index) => {
    setCurrent(index);
    setCollected((prev) => {
      let next = prev;
      for (let i = 1; i <= index; i += 1) {
        if (!next.has(i)) {
          if (next === prev) next = new Set(prev);
          next.add(i);
        }
      }
      return next;
    });
  }, []);

  return (
    <>
      <a className="skip" href="#education">
        Skip to content
      </a>
      <Hud coins={collected.size} total={SECTIONS.length - 1} world={SECTIONS[current].world} />
      <Hero />
      <main>
        <Education />
        <Experience />
        <Projects />
        <Participation />
        <Skills />
        <CertificateStrip />
        <Contact />
      </main>
      <Ending />
      <Runner collected={collected} onReach={reach} />
    </>
  );
}
