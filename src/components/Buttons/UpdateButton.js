import React, { useState } from "react";

// Components
import CookieModal from "../modals/CookieModal";

// Styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ cookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CookieModal isOpen={isOpen} closeModal={closeModal} oldCookie={cookie} />
    </>
  );
};

export default UpdateButton;
