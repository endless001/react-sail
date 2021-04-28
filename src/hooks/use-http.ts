import {useCallback} from "react";
import {http} from "utils/http";
import {useAuth} from "hooks/use-auth";

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      http(endpoint, { ...config, token: user?.accessToken }),
    [user?.accessToken]
  );
};
