import {useAuth} from "../context/auth-context";
import {useCallback} from "react";
import {http} from "utils/http";

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      http(endpoint, { ...config, token: user?.token }),
    [user?.token]
  );
};
