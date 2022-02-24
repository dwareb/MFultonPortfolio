import './App.css';
import './styles/Background.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import PreviousWork from './components/PreviousWork';
import Projects from './components/Projects';

function App() {
  return (
    <div className="main-window">
      <Router>
        <Navbar />
        <div className='main-area'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="About" element={<About />} />
          <Route path="previouswork" element={<PreviousWork />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
