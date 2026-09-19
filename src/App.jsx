import { useState } from 'react';
import Hud from './components/Hud.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Projects from './components/Projects.jsx';
import Trophies from './components/Trophies.jsx';
import Contact from './components/Contact.jsx';
import Ending from './components/Ending.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';

const SPY_IDS = ['top', 'stats', 'projects', 'trophies', 'contact'];

export default function App() {
  const [coins, setCoins] = useState(0);
  const active = useScrollSpy(SPY_IDS);

  return (
    <>
      <a className="skip" href="#stats">
        Skip to content
      </a>
      <Hud coins={coins} active={active} />
      <Hero onCoin={() => setCoins((c) => Math.min(c + 1, 99))} />
      <main>
        <Stats />
        <Projects />
        <Trophies />
        <Contact />
      </main>
      <Ending />
    </>
  );
}
