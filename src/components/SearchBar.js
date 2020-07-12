import React from "react";

// Styles
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled onChange={(event) => props.setQuery(event.target.value)} />
  );
};

export default SearchBar;
