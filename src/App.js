import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Components
import CookieDetail from "./components/CookieDetail";
import CookieList from "./components/CookieList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

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
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} handleToggle={handleToggle} />
      <Switch>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail />
        </Route>
        <Route path="/cookies">
          <CookieList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
