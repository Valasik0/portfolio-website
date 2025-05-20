import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="root-layout">
      <div className="side-container left-container">

      </div>
      <div className="main-container">
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
      <div className="side-container right-container">
        
      </div>
    </div>
  );
}

export default App;
