import React from "react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "./Buttons/DeleteButton";

// Styles
import { CookieWrapper } from "../styles";

const CookieItem = ({ cookie, deleteCookie }) => {
  return (
    <CookieWrapper>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={deleteCookie} />
    </CookieWrapper>
  );
};

export default CookieItem;
