import './Contact.css';

function Contact() {
  return (
    <div id="contact">
      <div className="contactinfo">
        <div className="contact-tile">
          <i className="fa-solid fa-envelope"></i>
          <span>example@email.com</span>
        </div>
        <div className="contact-tile">
          <i className="fa-solid fa-phone"></i>
          <span>+420 123 456 789</span>
        </div>
        <div className="contact-tile">
          <i className="fa-solid fa-location-dot"></i>
          <span>Prague, Czech Republic</span>
        </div>
      </div>
      <div className="socials">
        <div className="contact-tile">
          <i className="fa-brands fa-github"></i>
          <span>github.com/yourprofile</span>
        </div>
        <div className="contact-tile">
          <i className="fa-brands fa-linkedin"></i>
          <span>linkedin.com/in/yourprofile</span>
        </div>
        <div className="contact-tile">
          <i className="fa-brands fa-instagram"></i>
          <span>@yourinstagram</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
