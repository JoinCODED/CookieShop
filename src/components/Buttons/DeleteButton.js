import React from "react";

// Stores
import cookieStore from "../../stores/cookieStore";

// Styles
import { DeleteButtonStyled } from "./styles";
import bakeryStore from "../../stores/bakeryStore";

const DeleteButton = ({ bakeryId, cookieId }) => {
  const handleDelete = () => {
    if (cookieId) cookieStore.deleteCookie(cookieId);
    else bakeryStore.deleteBakery(bakeryId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
