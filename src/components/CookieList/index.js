import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "../SearchBar";

// Stores
import cookieStore from "../../stores/cookieStore";

// Styles
import { ListWrapper } from "./styles";
import AddButton from "../buttons/AddButton";

const CookieList = () => {
  const [query, setQuery] = useState("");

  const cookieList = cookieStore.cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(CookieList);
