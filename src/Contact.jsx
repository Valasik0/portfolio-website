import './Contact.css';

function Contact() {
  return (
    <div id="contact">
      <div className="contactinfo">
        <h1>Contact Me</h1>
        <div className="contact-tile">
          <i className="fa-solid fa-envelope"></i>
          <span>vaclav.vyrobik@gmail.com</span>
        </div>
        <div className="contact-tile">
          <i className="fa-solid fa-phone"></i>
          <span>+420 731 077 540</span>
        </div>
        <div className="contact-tile">
          <i className="fa-solid fa-location-dot"></i>
          <span>Odry, Czech Republic</span>
        </div>
      </div>
      <div className="socials">
        <h1>Connect with me</h1>
        <a className="contact-tile" href="https://github.com/Valasik0" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
          <span>github.com/Valasik0</span>
        </a>
        <a className="contact-tile" href="https://www.linkedin.com/in/václav-vyrobík-a4aa4735b" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          <span>linkedin.com/in/václav-vyrobík-a4aa4735b</span>
        </a>
        <a className="contact-tile" href="https://www.instagram.com/vaclav_vyrobik" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
          <span>@vaclav_vyrobik</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
