import * as React from "react";
import { IRouteProps } from "routes";
import RenderRoutes from "routes/renderRoutes";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background:"#fff"
  }
}));

export const UserLayout = (props: IRouteProps) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RenderRoutes {...props} />
    </div>
  );
};
