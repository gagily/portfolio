import "./contact.scss";

function Contact({contactIcons}) {
  return (
    <footer>
      <h4 id="contact">CONTACT</h4>
      <ul className="contact">
        {contactIcons.map((icon, i) => (
          <li key={i}>
            <a
              href={icon.url}
              target="_blank"
              className="contact__link"
              rel="noopener"
            >
              <i className={icon.iconClass + " contact__link__icon"}></i>
              <span className="sr-only">{icon.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <span>Gagily© 2019. Privacy policy</span>
    </footer>
  );
}

export default Contact;
