import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useRef, useState } from 'react';
import backgroundImage from './images/background.jpg';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef([]);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('section');

    const handleScroll = (event) => {
      if (isScrolling) return;
    
      setIsScrolling(true);
      const delta = Math.sign(event.deltaY);
    
      const activeSectionIndex = sectionsRef.current.findIndex((section) =>
        section.getBoundingClientRect().top >= 0
      );
    
      let nextIndex = activeSectionIndex + delta;
      nextIndex = Math.max(0, Math.min(nextIndex, sectionsRef.current.length - 1));
    
      sectionsRef.current[nextIndex].scrollIntoView({ behavior: "smooth" });
    
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };
  }, []);

  return (
    <div className="App dark-mode app-container" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Header />
      <main>
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;