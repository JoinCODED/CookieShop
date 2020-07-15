import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

// Styles
import { CookieWrapper } from "../styles";

const CookieItem = ({ cookie }) => {
  return (
    <CookieWrapper>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <UpdateButton cookie={cookie} />
      <DeleteButton cookieId={cookie.id} />
    </CookieWrapper>
  );
};

export default observer(CookieItem);
