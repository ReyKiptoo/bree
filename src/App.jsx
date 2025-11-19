import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <p>&copy; {new Date().getFullYear()} Brenda Chepkoech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
