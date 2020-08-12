import React from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

// Stores
import authStore from "../../stores/authStore";

// Styles
import { Description, ShopImage } from "./styles";
import { Title } from "../../styles";

const Home = () => {
  if (!authStore.user) return <Redirect to="/signin" />;
  return (
    <>
      <Title>Cookies & Beyond</Title>
      <Description>Where cookie maniacs gather</Description>
      <ShopImage
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
        alt="cookie shop"
      />
    </>
  );
};

export default observer(Home);
