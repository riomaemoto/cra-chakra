import { Home } from "../components/pages/home";
import { Page404 } from "../components/pages/page404";
import { Setting } from "../components/pages/setting";
import { UserManegement } from "../components/pages/user_management";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManegement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
