import { memo, useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import { CategoryContext } from "../../contexts/CategoryContext";

import locationImg from "../../assets/images/location.png";
import userLogo from "../../assets/images/user-logo.png";
import siteLogo from "../../assets/images/site-logo.png";
import cartLogo from "../../assets/images/cart-logo.png";
import hamburgerMenu from "../../assets/images/hamburger.png";

import "./header.scss";

const Header = () => {
  const { totalPrice } = useContext(CartContext);
  const { category } = useContext(CategoryContext);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [hide, setHide] = useState(false);
  const menuHide = () => {
    setHide(!hide);
  };
  return (
    <header className="header">
      {!scrollNav ? (
        <div className="header__info">
          <div className="container header__info__container">
            <div className="header__info__inner-left">
              <div className="header__location">
                <img src={locationImg} alt="location Img" />
                <select>
                  <option value="moscow">Mockow</option>
                  <option value="peterburg">Sankt-Peterburg</option>
                  <option value="volgograd">Volgograd</option>
                  <option value="kazan">kazan</option>
                </select>
              </div>
              <p>Проверить адрес</p>
              <p>
                Среднее время доставки*: <span>00:24:19</span>
              </p>
            </div>
            <div className="header__info__inner-right">
              <p>Время работы: с 11:00 до 23:00</p>
              <button>
                <img src={userLogo} alt="user logo" />
                Войти в аккаунт
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="header__bottom">
          <Link to="/">
            <img src={siteLogo} alt="site logo" />
          </Link>
          {scrollNav || window.innerWidth <= 1000 ? (
            <>
              <ul
                className={
                  hide ? "header__nav header__nav__hide" : "header__nav "
                }
              >
                {category.map((category, i) => {
                  return (
                    <li key={i}>
                      <a href={`#${category.name}`}>{category.name}</a>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            ""
          )}
          <div className="header__btns">
            <Link to="/cart">
              <button className="header__cart">
                <img src={cartLogo} alt="cart logo" />
                {totalPrice} ₽
              </button>
            </Link>
            <button onClick={menuHide} className="header__menu">
              <img src={hamburgerMenu} alt="hamburgerMenu" width={34} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const MemoHeader = memo(Header);

export default MemoHeader;
