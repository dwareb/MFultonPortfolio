import './App.css';
import './styles/Background.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import PreviousWork from './components/PreviousWork';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-window">
      <Router>
        <Navbar />
        <div className="main-area">
          <Routes>
            <Route path="/MFultonPortfolio/" element={<About />} />
            <Route path="/MFultonPortfolio/About" element={<About />} />
            <Route
              path="/MFultonPortfolio/previouswork"
              element={<PreviousWork />}
            />
            <Route path="/MFultonPortfolio/Projects" element={<Projects />} />
            <Route path="/MFultonPortfolio/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
