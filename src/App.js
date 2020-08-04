import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

// Stores
import bakeryStore from "./stores/bakeryStore";
import cookieStore from "./stores/cookieStore";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    black: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    black: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const handleToggle = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} handleToggle={handleToggle} />
      {bakeryStore.loading || cookieStore.loading ? (
        <h1>Loading</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
