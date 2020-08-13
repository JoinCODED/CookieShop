import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { FiLogOut } from "react-icons/fi";
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
import BakeryModal from "../modals/BakeryModal";

const NavBar = ({ currentTheme, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

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
          {authStore.user && (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <FiLogOut onClick={authStore.signout} size="2em" color="red" />
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
          {authStore.user && !authStore.user.bakerySlug && (
            <UsernameStyled onClick={openModal}>Create Bakery</UsernameStyled>
          )}
          <BakeryModal isOpen={isOpen} closeModal={closeModal} />

          <ThemeButton className="nav-item active" onClick={handleToggle}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
