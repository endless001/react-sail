import { User } from "types/user";
import * as userService from "services/user-service";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "store/index";
import {bootstrapUser} from "hooks/use-auth";
import {LoginForm} from "types/login-form";

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export const login = (form: LoginForm) => (dispatch: AppDispatch) =>
    userService.login(form).then((user) => dispatch(setUser(user)));

export const register = (form:  LoginForm) => (dispatch: AppDispatch) =>
    userService.register(form).then((user) => dispatch(setUser(user)));

export const logout = () => (dispatch: AppDispatch) =>
    userService.logout().then(() => dispatch(setUser(null)));

export const bootstrap = () => (dispatch: AppDispatch) =>
  bootstrapUser().then((user) => dispatch(setUser(user)));



