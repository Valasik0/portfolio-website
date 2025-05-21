import './Contact.css';
import './ContactForm.css';

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <form className="contact-form">
          <input placeholder='Name' type="text" name="name" required />
          <input placeholder='Email' type="email" name="email" required />
          <textarea placeholder='Message' name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default Contact;
