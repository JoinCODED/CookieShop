import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "../SearchBar";

// Stores
import authStore from "../../stores/authStore";

// Styles
import { ListWrapper } from "./styles";

const CookieList = ({ cookies = [] }) => {
  const [query, setQuery] = useState("");

  // if (!authStore.user || authStore.user.role !== "admin")
  //   return <Redirect to="/" />;

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
    </div>
  );
};

export default observer(CookieList);
