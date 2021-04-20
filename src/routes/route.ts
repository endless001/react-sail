import { lazy } from "react";
import { BasicLayout } from "layouts/basic-layout";
import { UserLayout } from "layouts/user-layout";
import { LoginScreen } from "screens/user/login";
import { Copyright } from "components/copyright";
import { RegisterScreen } from "screens/user/register";
import { IRouteProps } from "routes";
import {Authenticated} from "../context/authenticated";

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
        component: Authenticated(Copyright ),
      },
    ],
  },
  {
    path: "*",
    //component: lazy(() => import("../pages/404")),
  },
];
export default routes;
