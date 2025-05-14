import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#E1E1E1', minHeight: '100vh' }}>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
