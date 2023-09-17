// -- Link
import { Link } from "react-router-dom";

// -- Logo
import Logo from "presentation/component/atom/Logo";

// -- component
import Button from "presentation/component/atom/Button";

// -- Data Menu nav
import navMenu from "./navMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            <Logo className="header__logo__el" fileName="trafalgar.svg" name="Logo Trafalgar"></Logo>
          </Link>
          <button className="burger-menu js-burger-menu" type="button">
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
          </button>
          <div className="header__nav-mobile js-header-menu">
            <ul className="header__nav">
              <li className="header__nav__item header__nav__item--active">
                <Link className="header__nav__link" to="/">
                  Home
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/help">
                  Find a doctor
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/features">
                  Apps
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/signup">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="header__auth"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
