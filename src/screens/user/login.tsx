import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LoadingButton from '@material-ui/lab/LoadingButton';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { Copyright } from "components/copyright";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useAuth } from "hooks/use-auth";
import { useAsync } from "hooks/use-async";
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import {useDocumentTitle} from "utils";
import { LoginForm } from "types/login-form";
import {Snackbar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  main: {
    marginTop: theme.spacing(25),
    backgroundColor: "#fff",
    maxHeight: "510px",
    borderRadius: "5px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const [error, setError] = useState<Error | null>(null);

  const classes = useStyles();
  useDocumentTitle("login");

  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginForm>();
  const onSubmit = handleSubmit( async data =>
  {
    try {
      await run(login(data));
    } catch (e) {
      setError(e);
    }
  });

  return (
    <Container  className={classes.main} component="main" maxWidth="xs">
      {error?(
          <Snackbar
           open={true}
           message={error}
           anchorOrigin={{
             vertical: 'top',
             horizontal: 'right'
           }}
           autoHideDuration={1000}
          />
      ):null}

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} >
          <TextField
              {...register("email")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
              {...register("password")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoadingButton  variant="contained"
                          fullWidth
                          loading={isLoading}
                          color="primary"
                          className={classes.submit}
                          type={"submit"}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
