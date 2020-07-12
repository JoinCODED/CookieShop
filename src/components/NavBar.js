import React from "react";

// Styles
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";

import { Logo, NavItem, NavStyled, ThemeButton } from "../styles";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo className="navbar-brand" to="/">
          <img
            alt="logo"
            src={props.currentTheme === "light" ? lightLogo : darkLogo}
          />
        </Logo>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <NavItem
            className="nav-item"
            to="/cookies"
            style={{ margin: 10, float: "right" }}
          >
            Cookies
          </NavItem>
          <ThemeButton className="nav-item active" onClick={props.handleToggle}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
