import React, {Suspense, useState} from "react";
import route from "./routes/route";
import RenderRoutes from "./routes/renderRoutes";
import { BrowserRouter } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {ErrorBoundary} from "components/error-boundary";
import { FullPageErrorFallback } from "components/index";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

const App = () => {

  const classes = useStyles();
    return (
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <BrowserRouter>
      <Suspense
        fallback={
          <div className={classes.root}>
            {" "}
            <LinearProgress />
          </div>
        }
      >
        <RenderRoutes children={route}></RenderRoutes>
      </Suspense>
    </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
