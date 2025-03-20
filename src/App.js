import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useRef } from 'react';
import backgroundImage from './images/background.jpg';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('section');
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