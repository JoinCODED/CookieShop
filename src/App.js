import React from "react";

const styles = {
  cookie: {
    margin: "20px",
  },
  cookieImage: {
    width: "200px",
    height: "200px",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  text: {
    textAlign: "center",
  },
};

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
      <div style={styles.list}>
        <div style={styles.cookie}>
          <img
            src="https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg"
            alt="chocolate chip cookies"
            style={styles.cookieImage}
          />
          <p style={styles.text}>Chocolate Chip Cookies</p>
          <p style={styles.text}>20 KD</p>
        </div>
        <div style={styles.cookie}>
          <img
            src="https://i.pinimg.com/originals/f6/3e/2a/f63e2a1cd0c7d3c0ab9cd277d3f32050.jpg"
            alt="cute cookies"
            style={styles.cookieImage}
          />
          <p style={styles.text}>Cute Cookies</p>
          <p style={styles.text}>25 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
