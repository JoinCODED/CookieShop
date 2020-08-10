import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import AddButton from "../buttons/AddButton";
import BakeryItem from "./BakeryItem";
import SearchBar from "../SearchBar";

// Styles
import { Title } from "../../styles";

// Stores
import bakeryStore from "../../stores/bakeryStore";
import authStore from "../../stores/authStore";
import { Redirect } from "react-router";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);
  return (
    <div className="container">
      <Title>Bakeries</Title>
      <SearchBar setQuery={setQuery} />
      {bakeryList}
      <AddButton />
    </div>
  );
};

export default observer(BakeryList);
