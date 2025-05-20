import './Socials.css';

function Socials() {
  return (
    <div className="socials-bar">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
        <i className="fa-brands fa-stack-overflow"></i>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <i className="fa-brands fa-telegram"></i>
      </a>
      <div className="socials-bar-line"></div>
    </div>
  );
}

export default Socials;
