import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Components
import CookieDetail from "./components/CookieDetail";
import CookieList from "./components/CookieList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

// Data
import cookies from "./cookies";

// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_cookies, setCookies] = useState(cookies);

  const createCookie = (newCookie) => {
    console.log("createCookie -> newCookie", newCookie);

    const updatedCookies = [..._cookies, newCookie];
    setCookies(updatedCookies);
  };

  const deleteCookie = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
    setCookies(updatedCookies);
  };

  const handleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} handleToggle={handleToggle} />
      <Switch>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail cookies={_cookies} deleteCookie={deleteCookie} />
        </Route>
        <Route path="/cookies">
          <CookieList
            cookies={_cookies}
            createCookie={createCookie}
            deleteCookie={deleteCookie}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
