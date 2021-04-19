import { lazy } from "react";
import {BasicLayout}  from 'layouts/basic-layout'
import { UserLayout }  from 'layouts/user-layout'
import {LoginScreen}  from "screens/user/login"
import {IRouteProps} from "routes";



const routes:IRouteProps[] = [
    {
        path: "/user",
        component: UserLayout,
        children: [
            {
                path: "/user/signin",
                component: LoginScreen,
            },
            {
                path: "/user/signup",
                component: LoginScreen,
            }
        ],
    },
    {
        path: "/",
        component: BasicLayout,
        children: [
            {
                path: "/",
               // component: authenticated(lazy(() => import("../pages/home/Index"))),
            }
        ],
    },
    {
        path: "*",
        //component: lazy(() => import("../pages/404")),
    },

];
export default routes