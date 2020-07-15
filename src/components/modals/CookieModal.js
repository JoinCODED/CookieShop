import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import cookieStore from "../../stores/cookieStore";

// Styles
import { CreateButtonStyled, LabelStyled, ModalTitle } from "../../styles";

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

const CookieModal = ({ isOpen, closeModal, oldCookie }) => {
  const [cookie, setCookie] = useState(
    oldCookie ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newCookie = { ...cookie, [event.target.name]: event.target.value };
    setCookie(newCookie);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // oldCookie
    //   ? cookieStore.updateCookie(cookie)
    //   : cookieStore.createCookie(cookie);

    cookieStore[oldCookie ? "updateCookie" : "createCookie"](cookie);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Cookie Modal"
    >
      <ModalTitle>New Cookie</ModalTitle>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <LabelStyled>Name</LabelStyled>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={cookie.name}
            />
          </div>
          <div className="col-6">
            <LabelStyled>Price</LabelStyled>
            <input
              name="price"
              type="number"
              min="15"
              onChange={handleChange}
              className="form-control"
              value={cookie.price}
            />
          </div>
        </div>
        <div className="form-group">
          <LabelStyled>Description</LabelStyled>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={cookie.description}
          />
        </div>
        <div className="form-group">
          <LabelStyled>Image</LabelStyled>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={cookie.image}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldCookie ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
