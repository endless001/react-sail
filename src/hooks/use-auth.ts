import {User} from "types/user";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "store/auth-slice";
import {useCallback} from "react";
import * as authStore from "store/auth-slice";
import * as auth from "auth-provider";
import {http} from "utils/http";
import {LoginForm} from "types/login-form";



export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

export const useAuth = () => {
  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();
  const user = useSelector(selectUser);
  const login = useCallback(
    (form: LoginForm) => dispatch(authStore.login(form)),
    [dispatch]
  );

  const register = useCallback(
    (form: LoginForm) => dispatch(authStore.register(form)),
    [dispatch]
  );

  const logout = useCallback(() => dispatch(authStore.logout()), [dispatch]);
  return {
    user,
    login,
    register,
    logout,
  };
};
