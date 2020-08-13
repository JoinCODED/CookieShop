import React, { useState } from "react";

// Components
import BakeryModal from "../modals/BakeryModal";
import CookieModal from "../modals/CookieModal";

// Styles
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ bakery, cookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {bakery ? (
        <BakeryModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldBakery={bakery}
        />
      ) : (
        <CookieModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldCookie={cookie}
        />
      )}
    </>
  );
};

export default UpdateButton;
