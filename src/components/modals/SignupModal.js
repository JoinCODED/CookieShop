import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import authStore from "../../stores/authStore";

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

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <ModalTitle>New User</ModalTitle>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <LabelStyled>Username</LabelStyled>
          <input
            required
            name="username"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={user.username}
          />
        </div>
        <div className="form-group">
          <LabelStyled>First Name</LabelStyled>
          <input
            name="firstName"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={user.firstName}
          />
        </div>
        <div className="form-group">
          <LabelStyled>Last Name</LabelStyled>
          <input
            name="lastName"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={user.lastName}
          />
        </div>
        <div className="form-group">
          <LabelStyled>Email</LabelStyled>
          <input
            name="email"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={user.email}
          />
        </div>
        <div className="form-group">
          <LabelStyled>Password</LabelStyled>
          <input
            required
            name="password"
            type="password"
            onChange={handleChange}
            className="form-control"
            value={user.password}
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          Sign up
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SignupModal;
