function Navbar() {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#1E1E1E', color: '#BB86FC', padding: '1rem', zIndex: 1000 }}>
      <nav>
        <a href="#home" style={{ margin: '0 1rem', color: '#BB86FC', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ margin: '0 1rem', color: '#BB86FC', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ margin: '0 1rem', color: '#BB86FC', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
