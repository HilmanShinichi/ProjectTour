import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import './Header.css'

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const Header = () => {
  return (
    <Container>
      <Row>
        <div className="nav__wrapper header d-flex align-items-center justify-content-between">
          {/* ======== Logo ======= */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* ======== Logo End ======= */}
          {/* ======== Menu Start ======= */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) =>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""}>{item.display}</NavLink>
                  </li>
                ))}
            </ul>
          </div>
          {/* ======== Menu End ======= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav_btns d-flex align-items-center gap-4">
              <button className="btn secondary__btn"><Link to='/login'>Login</Link></button>
              <button className="btn primary__btn"><Link to='/register'>Register</Link></button>

            </div>
                <span className="mobile__menu">
                {/* icon dari remixicon */}
                <i className="ri-menu-line"></i> 
                </span>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Header;