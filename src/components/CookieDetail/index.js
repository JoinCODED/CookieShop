import React from "react";
import { observer } from "mobx-react";
import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "../buttons/DeleteButton";

// Stores
import cookieStore from "../../stores/cookieStore";

// Styles
import { DetailWrapper } from "./styles";
import UpdateButton from "../buttons/UpdateButton";

const CookieDetail = () => {
  const { cookieSlug } = useParams();

  const cookie = cookieStore.cookies.find(
    (cookie) => cookie.slug === cookieSlug
  );

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
      <UpdateButton cookie={cookie} />
      <DeleteButton cookieId={cookie.id} />
    </DetailWrapper>
  );
};

export default observer(CookieDetail);
