import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./Buttons/DeleteButton";

// Styles
import { DetailWrapper } from "../styles";

const CookieDetail = ({ cookies, deleteCookie }) => {
  const { cookieSlug } = useParams();

  const cookie = cookies.find((cookie) => cookie.slug === cookieSlug);

  if (!cookie) return <Redirect to="/cookies" />;

  return (
    <DetailWrapper>
      <Link to="/cookies">
        <p>Back to Cookies</p>
      </Link>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price}</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={deleteCookie} />
    </DetailWrapper>
  );
};

export default CookieDetail;
