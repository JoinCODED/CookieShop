import React, { useState } from "react";

// Components
import CookieModal from "../modals/CookieModal";

// Styles
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ createCookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <CookieModal
        isOpen={isOpen}
        closeModal={closeModal}
        createCookie={createCookie}
      />
    </div>
  );
};

export default AddButton;
