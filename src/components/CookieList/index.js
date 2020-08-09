import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "../SearchBar";

// Styles
import { ListWrapper } from "./styles";

const CookieList = ({ cookies = [] }) => {
  const [query, setQuery] = useState("");

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
