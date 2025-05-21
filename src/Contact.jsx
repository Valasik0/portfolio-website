import './styles/Contact.css';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState('');

  const handleCopy = (value, key) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(''), 1200);
  };

  return (
    <section id="contact">
      <div className="contactinfo">
        <h1>Contact Me</h1>
        <div>
          <div className="contact-tile" onClick={() => handleCopy('vaclav.vyrobik@gmail.com', 'email')} tabIndex={0}>
            <i className="fa-solid fa-envelope" />
            <span>vaclav.vyrobik@gmail.com <i className="fa-solid fa-copy" /></span>
            {copied === 'email' && <span className="copied-tooltip">Copied!</span>}
          </div>
          <div className="contact-tile" onClick={() => handleCopy('+420 731 077 540', 'phone')} tabIndex={0}>
            <i className="fa-solid fa-phone" />
            <span>+420 731 077 540 <i className="fa-solid fa-copy" /></span>
            {copied === 'phone' && <span className="copied-tooltip">Copied!</span>}
          </div>
          <div className="contact-tile" onClick={() => handleCopy('Odry, Czech Republic', 'address')} tabIndex={0}>
            <i className="fa-solid fa-location-dot" />
            <span>Odry, Czech Republic <i className="fa-solid fa-copy" /></span>
            {copied === 'address' && <span className="copied-tooltip">Copied!</span>}
          </div>
        </div>
      </div>
      <div className="socials">
        <h1>Connect with me</h1>
        <div>
          <a className="contact-tile" href="https://github.com/Valasik0" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
            <span>github.com/Valasik0</span>
          </a>
          <a className="contact-tile" href="https://www.linkedin.com/in/václav-vyrobík-a4aa4735b" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" />
            <span>linkedin.com/in/václav-vyrobík-a4aa4735b</span>
          </a>
          <a className="contact-tile" href="https://www.instagram.com/vaclav_vyrobik" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram" />
            <span>@vaclav_vyrobik</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
