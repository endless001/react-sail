import * as React from "react";
import {IRouteProps} from 'routes'
import RenderRoutes from "routes/renderRoutes";


export  const UserLayout = (props: IRouteProps) => {

    return (
        <div>
            <RenderRoutes {...props} />
        </div>
    );
};

