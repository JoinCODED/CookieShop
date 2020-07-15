import React from "react";

// Stores
import cookieStore from "../../stores/cookieStore";

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId }) => {
  const handleDelete = () => cookieStore.deleteCookie(cookieId);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
