import React from "react";
import logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "rsuite/dist/rsuite.min.css";
import LogoCard from "./LogoCard.js";
import "./nav.scss";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  state = {
    color: false,
    checkbox: true,
  };
  changscroll = () => {
    if (window.scrollY >= 70) {
      this.setState({ checkbox: true });
    }
  };
  handleOncheckBox = () => {
    this.setState({ checkbox: !this.state.checkbox });
  };
  changeColor = () => {
    if (window.scrollY >= 55) {
      this.setState({ color: true });
    } else {
      this.setState({ color: false });
    }
  };
  render() {
    window.addEventListener("scroll", this.changeColor);
    window.addEventListener("scroll", this.changscroll);

    let { color, checkbox } = this.state;

    return (
      <>
        <div className={color ? "nav" : "nav-opacity"}>
          <img className="logo" src={logo} />

          <ul className={checkbox ? "hide" : "show"}>
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="menuMobile" onClick={() => this.handleOncheckBox()}>
            {checkbox ? <FaBars /> : <FaTimes />}
          </div>
          <LogoCard />
        </div>
      </>
    );
  }
}

export default Nav;
