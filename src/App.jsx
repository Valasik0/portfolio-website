import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LetsConnect from './LetsConnect';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#19193E] to-[#33234a] text-white">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col gap-12 px-4 py-8">
        <Home />
        <About />
        <Contact />
        <LetsConnect />
      </main>
    </div>
  );
}

export default App;
