import React from "react";

// Data
import cookies from "./cookies";

// Styles
import styles from "./styles";

function App() {
  console.log(cookies[0].name);
  const example = () => {
    if (false)
      return (
        <div>
          <h1>HI I'm LUIS</h1>
          <h1>I HAVE A QUESTION</h1>
        </div>
      );
  };

  const cookieList = cookies.map((cookie) => (
    <div style={styles.cookie} key={cookie.id}>
      <img src={cookie.image} alt={cookie.name} style={styles.cookieImage} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p>
    </div>
  ));

  return (
    <div>
      <div>
        {example()}
        <h1 style={styles.text}>Cookies and Beyond</h1>
        <h4 style={styles.text}>Where cookie maniacs gather</h4>
        <img
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          alt="cookie shop"
          style={styles.shopImage}
        />
      </div>
      <div style={styles.list}>{cookieList}</div>
    </div>
  );
}

export default App;
