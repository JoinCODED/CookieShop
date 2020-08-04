import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import bakeryStore from "../../stores/bakeryStore";

// Styles
import { CreateButtonStyled, LabelStyled, ModalTitle } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BakeryModal = ({ isOpen, closeModal, oldBakery }) => {
  const [bakery, setBakery] = useState(
    oldBakery ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newBakery = { ...bakery, [event.target.name]: event.target.value };
    setBakery(newBakery);
  };

  const handleImage = (event) =>
    setBakery({ ...bakery, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    bakeryStore[oldBakery ? "updateBakery" : "createBakery"](bakery);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Bakery Modal"
    >
      <ModalTitle>New Bakery</ModalTitle>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <LabelStyled>Name</LabelStyled>
          <input
            required
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={bakery.name}
          />
        </div>
        <div className="form-group">
          <LabelStyled>Image</LabelStyled>
          <input
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldBakery ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BakeryModal;
