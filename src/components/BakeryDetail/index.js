import React from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

// Components
import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";

// Styles
import { DetailWrapper } from "../CookieDetail/styles";

// Stores
import bakeryStore from "../../stores/bakeryStore";
import CookieList from "../CookieList";
import DeleteButton from "../buttons/DeleteButton";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();

  const bakery = bakeryStore.bakeries.find(
    (_bakery) => _bakery.slug === bakerySlug
  );

  if (!bakery) return <Redirect to="/bakeries" />;

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{bakery.name}</h4>
          <img src={bakery.image} alt={bakery.name} />
          <UpdateButton bakery={bakery} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <CookieList cookies={bakery.cookies} />
        <AddButton bakeryId={bakery.id} />
        <DeleteButton bakeryId={bakery.id} />
      </div>
    </div>
  );
};

export default observer(BakeryDetail);
