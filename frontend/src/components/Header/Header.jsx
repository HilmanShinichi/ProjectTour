import React, { useEffect, useRef, useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

import logo from "../../assets/images/logo.png";
import "./Header.css";
import { AuthContext } from "./../../context/AuthContext";

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

const Header = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);



  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toogleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper header d-flex align-items-center justify-content-between">
            {/* ======== Logo ======= */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* ======== Logo End ======= */}
            {/* ======== Menu Start ======= */}
            <div className="navigation" ref={menuRef} onClick={toogleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ======== Menu End ======= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <div className="d-flex p-5">
                      <Dropdown
                        isOpen={dropdownOpen}
                        toggle={toggle}
                        direction={direction}
                      >
                        <DropdownToggle caret>{user.username}</DropdownToggle>
                        <DropdownMenu
                          {...args}
                          style={{
                            display: user.username === "user" ? "none" : "",
                          }}
                        >
                          <DropdownItem header>{user.username}</DropdownItem>
                          <DropdownItem>
                            <Link
                              to={"/list/0"}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Dashboard
                            </Link>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>

                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile__menu" onClick={toogleMenu}>
                {/* icon dari remixicon */}
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {
  direction: PropTypes.string,
};

export default Header;
