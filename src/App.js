import React from "react";

// Components
import CookieList from "./components/CookieList";

// Styles
import styles from "./styles";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>Cookies and Beyond</h1>
        <h4 style={styles.text}>Where cookie maniacs gather</h4>
        <img
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          alt="cookie shop"
          style={styles.shopImage}
        />
      </div>
      <CookieList />
    </div>
  );
}

export default App;
