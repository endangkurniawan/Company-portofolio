// -- Link
import { Link } from "react-router-dom";

// Style
import "./style.scss";

// Icon
import { AiOutlineArrowRight } from "react-icons/ai";

// -- Logo
import Logo from "presentation/component/atom/Logo";
import Button from "presentation/component/atom/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <Link className="header__logo" to="/">
            <Logo fileName="logo 1.png" name="Logo Trafalgar" clas="header__logo__el"></Logo>
          </Link>
          <button className="burger-menu" type="button">
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
          </button>
          <div className="header__menu">
            <ul className="header__menu__list">
              <li className="header__menu__item">
                <Link className="link" to="#">
                  How to Start
                </Link>
              </li>
              <li className="header__menu__item">
                <Link className="link" to="#">
                  Services
                  <ul className="menu__dropdown">
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Hire Permanent staff
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Staff Augmentation
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Software Outsourcing
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Build Remote Office
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="header__menu__item">
                <Link className="link" to="#">
                  Technologies
                  <ul className="menu__dropdown">
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Frontend
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Backend
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Framework
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Mobile App
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Database
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Google
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Data Science
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Machine Learning
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Devops
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        CMS
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Ecommerse
                      </Link>
                    </li>
                    <li className="menu_dropdown__item">
                      <Link className="link" to="#">
                        Security
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="header__menu__item">
                <Link className="link" to="#">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__nav">
            <Button variant="header__nav__button btn--secondary" type="button">
              BUILD A TEAM
              <span className="header__nav__arrow">
                <AiOutlineArrowRight />
              </span>
            </Button>
            <Link className="header__nav__link" to="#">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
