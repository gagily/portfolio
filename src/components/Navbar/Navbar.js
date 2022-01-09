import { useState } from "react";
import "./navbar.scss";

function Navbar({ logo }) {
  const [navSlide, setNavSlide] = useState(false);

  return (
    <header className="navigation-wrapper ">
      <nav className="navigation container">
        <div>
          <a href="#">
            <img className="navigation__logo" src={logo} alt="portfolio logo" />
          </a>
        </div>
        <button
          className={
            "navigation__burger " +
            (navSlide ? "navigation__burger--active" : "")
          }
          onClick={() => setNavSlide(!navSlide)}
        >
          <span className="navigation__burger__line1"></span>
          <span className="navigation__burger__line2"></span>
          <span className="navigation__burger__line3"></span>
        </button>
        <ul
          className={
            "navigation__links " + (navSlide ? "navigation__links--active" : "")
          }
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
