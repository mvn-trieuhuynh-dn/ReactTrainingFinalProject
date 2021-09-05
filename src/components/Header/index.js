import React from 'react';
import logoHeader from './../../assets/img/logo.png';
import { FaCartPlus, FaUser, FaHeart} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const favs = useSelector(state => state.fav.value);
  console.log(favs);
  const cartList = useSelector((state) => state.cart.value);

  return (
    <>
    <header className="header-page">
      <div className="container">
        <div className="header-box">
          <div className="header-logo">
            <NavLink to="/">
              <img className="logo-header" src={logoHeader} alt="logo" />
            </NavLink>
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/about-us">About Us</NavLink>
              </li>
            </ul>
          </nav>
          <ul className="countable-list">
            <li className="countable-item">
              <NavLink to="/products"> 
                <span className="wrap-fav-couter">
                  <FaHeart />
                  {!!favs.length && <span>{favs.length}</span>}
                </span>
              </NavLink>
            </li>
            <li className="countable-item"><NavLink to="/account"><FaUser /></NavLink></li>
            <li className="countable-item">
              <NavLink to="/cart">
                <span className="wrap-fav-couter">
                  <FaCartPlus />
                  {!!cartList.length && <span>{cartList.length}</span>}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;
