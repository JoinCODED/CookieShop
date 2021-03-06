import React from "react";
import { Route, Switch } from "react-router";

// Components
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";
import CookieDetail from "../CookieDetail";
import CookieList from "../CookieList";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

// Stores
import cookieStore from "../../stores/cookieStore";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route path="/cookies/:cookieSlug">
        <CookieDetail />
      </Route>
      <Route path="/cookies">
        <CookieList cookies={cookieStore.cookies} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
