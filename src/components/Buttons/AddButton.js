import React, { useState } from "./node_modules/react";

// Components
import CookieModal from "../modals/CookieModal";

// Styles
import { BsPlusCircle } from "./node_modules/react-icons/bs";
import BakeryModal from "../modals/BakeryModal";

const AddButton = ({ bakery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      {bakery ? (
        <CookieModal bakery={bakery} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <BakeryModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
