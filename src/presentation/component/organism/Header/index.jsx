// --style
import style from "./style.module.scss";

// -- Link
import { Link } from "react-router-dom";

// -- Logo
import Logo from "presentation/component/atom/Logo";

// -- Data Menu nav
import navMenu from "./navMenu";

const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <Link className={style.logo} to="/">
            <Logo className={style.logo__el} fileName="trafalgar.svg" name="Logo Trafalgar"></Logo>
          </Link>
          <button className={style.burgerMenu} type="button">
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </button>
          <div className={style.menu}>
            <ul className={style.nav}>
              {navMenu.map((val, idx) => (
                <li key={`nm-${idx}`} className={style.item}>
                  <Link className={style.link} to={val.to}>
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
