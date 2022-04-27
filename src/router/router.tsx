import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/login";
import { HomeRoutes } from "./home_routes";
import { Page404 } from "../components/pages/page404";
import { HeaderLayout } from "../components/parts/layout/headerLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path={"*"}>
        <Page404 />
      </Route>
    </Switch>
  );
});
