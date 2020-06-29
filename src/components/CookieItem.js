import React from "react";

// Styles
import styles from "../styles";

const CookieItem = (props) => {
  return (
    <div style={styles.cookie}>
      <h2>{props.message}</h2>
      <img
        src={props.cookie.image}
        alt={props.cookie.name}
        style={styles.cookieImage}
      />
      <p style={styles.text}>{props.cookie.name}</p>
      <p style={styles.text}>{props.cookie.price} KD</p>
    </div>
  );
};

export default CookieItem;
