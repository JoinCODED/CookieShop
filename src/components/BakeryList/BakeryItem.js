import React from "react";

// Styles
import { BakeryItemImage } from "./styles";
import { Link } from "react-router-dom";

const BakeryItem = ({ bakery }) => {
  return (
    <Link to={`/bakeries/${bakery.slug}`}>
      <BakeryItemImage src={bakery.image} alt={bakery.name} />
    </Link>
  );
};

export default BakeryItem;
