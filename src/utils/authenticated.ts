import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import {RootState} from "../store";



export const Authenticated = connectedRouterRedirect({
    redirectPath: '/user/login',
    authenticatedSelector: (state:RootState) => state.auth.user !== null,
    wrapperDisplayName: 'UserIsAuthenticated'
})
