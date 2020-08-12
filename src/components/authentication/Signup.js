import React, { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";

// Stores
import authStore from "../../stores/authStore";

// Styles
import { CreateButtonStyled, LabelStyled } from "../modals/styles";
import { Title } from "../../styles";

const SignupModal = () => {
  const history = useHistory();
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
    history.push("/");
  };

  if (authStore.user) return <Redirect to="/" />;

  return (
    <div className="container">
      <Title>New User</Title>
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
        <Link to="/signin">
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupModal;
