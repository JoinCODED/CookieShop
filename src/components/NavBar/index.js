import React from "react";

// Styles
import lightLogo from "../../light-logo.png";
import darkLogo from "../../dark-logo.png";

import { Logo, NavItem, NavStyled, ThemeButton } from "./styles";

const NavBar = ({ currentTheme, handleToggle }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <Logo className="navbar-brand" to="/">
          <img
            alt="logo"
            src={currentTheme === "light" ? lightLogo : darkLogo}
          />
        </Logo>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <NavItem className="nav-item" to="/bakeries">
            Bakeries
          </NavItem>
          <NavItem className="nav-item" to="/cookies">
            Cookies
          </NavItem>
          <ThemeButton className="nav-item active" onClick={handleToggle}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
