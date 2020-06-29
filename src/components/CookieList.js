import React from "react";

// Components
import CookieItem from "./CookieItem";

// Data
import cookies from "../cookies";

// Styles
import styles from "../styles";

const CookieList = () => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} message="HIIII" key={cookie.id} />
  ));

  return <div style={styles.list}>{cookieList}</div>;
};

export default CookieList;
