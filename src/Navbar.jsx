import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact', 'connect'];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          current = section;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="navbar">
      <nav>
        <a href="#connect" className={active === 'connect' ? 'active' : ''}>Let's connect</a>
        <a href="#contact" className={active === 'contact' ? 'active' : ''}>Contact</a>
        <a href="#about" className={active === 'about' ? 'active' : ''}>About</a>
        <a href="#home" className={active === 'home' ? 'active' : ''}>Home</a>
        
        
      </nav>
    </header>
  );
}

export default Navbar;
