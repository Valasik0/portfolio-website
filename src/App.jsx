import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LetsConnect from './LetsConnect';
import './App.css';


function App() {
  return (
    <div id="root-layout">
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <Home />
          <About />
          <Contact />
          <LetsConnect />
        </div>
      </div>
    </div>
  );
}

export default App;
