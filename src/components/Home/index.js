import React from "react";

// Styles
import { Description, ShopImage } from "./styles";
import { Title } from "../../styles";

const Home = () => {
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

export default Home;
