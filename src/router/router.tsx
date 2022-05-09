import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/login";
import { HomeRoutes } from "./home_routes";
import { Page404 } from "../components/pages/page404";
import { HeaderLayout } from "../components/parts/layout/headerLayout";
import { LoginUserProvider } from "../providers/loginUserProvider";
export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {HomeRoutes.map((item) => (
                <Route
                  key={item.path}
                  exact={item.exact}
                  path={`${url}${item.path}`}
                >
                  <HeaderLayout>{item.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path={"*"}>
        <Page404 />
      </Route>
    </Switch>
  );
});
