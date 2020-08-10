import React from "react";
import { observer } from "mobx-react";

// Components
import SignupButton from "../buttons/SignupButton";
import SigninButton from "../buttons/SigninButton";

// Styles
import lightLogo from "../../light-logo.png";
import darkLogo from "../../dark-logo.png";
import {
  Logo,
  NavItem,
  NavStyled,
  ThemeButton,
  UsernameStyled,
} from "./styles";

// Stores
import authStore from "../../stores/authStore";

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
          {authStore.user ? (
            <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}
          {authStore.user?.role === "admin" && (
            <>
              <NavItem className="nav-item" to="/bakeries">
                Bakeries
              </NavItem>
              <NavItem className="nav-item" to="/cookies">
                Cookies
              </NavItem>
            </>
          )}

          <ThemeButton className="nav-item active" onClick={handleToggle}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
