//Main application page. Using state variable for navigation now.

import './App.css';
import './styles/Background.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import PreviousWork from './components/PreviousWork';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  //Location state variable for determining which page should be rendered.
  const [location, setLocation] = useState('about');

  return (
    <div className="main-window">
      <Navbar location={location} setLocation={setLocation} />
      <div className="main-area">
        {location === 'about' ? <About /> : ''}
        {location === 'previouswork' ? <PreviousWork /> : ''}
        {location === 'projects' ? <Projects /> : ''}
        {location === 'contact' ? <Contact /> : ''}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
