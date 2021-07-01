import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/main/main";
import NotFound from "../pages/not-found/not-found";
import { AppRoutes } from "../../const";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={`${AppRoutes.MAIN}`} exact>
        <Main />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
