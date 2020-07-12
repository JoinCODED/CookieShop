import React, { useState } from "react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Styles
import { ListWrapper } from "../styles";
import AddButton from "./Buttons/AddButton";

const CookieList = ({ cookies, createCookie, deleteCookie }) => {
  const [query, setQuery] = useState("");

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => (
      <CookieItem cookie={cookie} deleteCookie={deleteCookie} key={cookie.id} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
      <AddButton createCookie={createCookie} />
    </div>
  );
};

export default CookieList;
