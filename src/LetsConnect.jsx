import './LetsConnect.css';
import './ContactForm.css';

function LetsConnect() {
  return (
    <div id="letsconnect">
      <h1>Let's Connect</h1>
      <form className="contact-form">
          <input placeholder='Name' type="text" name="name" required />
          <input placeholder='Email' type="email" name="email" required />
          <textarea placeholder='Message' name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default LetsConnect;