import React, { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";

// Stores
import authStore from "../../stores/authStore";

// Styles
import { CreateButtonStyled, LabelStyled } from "../modals/styles";
import { Title } from "../../styles";
import { observer } from "mobx-react";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  if (authStore.user)
    return (
      <Redirect
        to={
          authStore.user.bakerySlug
            ? `/bakeries/${authStore.user.bakerySlug}`
            : "/"
        }
      />
    );

  return (
    <div className="container">
      <Title>Sign in</Title>
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
          Sign in
        </CreateButtonStyled>
        <Link to="/signup">
          <p>Are you a new user?</p>
        </Link>
      </form>
    </div>
  );
};

export default observer(Signin);
