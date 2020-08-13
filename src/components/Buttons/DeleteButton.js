import React from "./node_modules/react";
import { observer } from "./node_modules/mobx-react";

// Stores
import cookieStore from "../../stores/cookieStore";
import authStore from "../../stores/authStore";

// Styles
import { DeleteButtonStyled } from "./styles";
import bakeryStore from "../../stores/bakeryStore";

const DeleteButton = ({ bakeryId, cookieId }) => {
  const handleDelete = async () => {
    if (cookieId) cookieStore.deleteCookie(cookieId);
    else {
      await bakeryStore.deleteBakery(bakeryId);
      authStore.user.bakerySlug = null;
    }
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
