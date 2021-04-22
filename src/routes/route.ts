import { lazy } from "react";
import { BasicLayout } from "layouts/basic-layout";
import { UserLayout } from "layouts/user-layout";
import { LoginScreen } from "screens/user/login";
import { RegisterScreen } from "screens/user/register";
import { DashboardScreen } from  "screens/dashboard/index";
import { IRouteProps } from "routes";
import { Authenticated } from "../utils/authenticated";

const routes: IRouteProps[] = [
  {
    path: "/user",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        component: LoginScreen,
      },
      {
        path: "/user/register",
        component: RegisterScreen,
      },
    ],
  },
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/",
        component: Authenticated(DashboardScreen),
      },
    ],
  },
  {
    path: "*",
    //component: lazy(() => import("../pages/404")),
  },
];
export default routes;
