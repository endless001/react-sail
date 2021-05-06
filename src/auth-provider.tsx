import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {Provider, useDispatch} from "react-redux";
import { store } from "./store";
import {useAsync} from "./hooks/use-async";
import {User} from "./types/user";
import {useMount} from "./utils";
import {bootstrap} from "./store/auth-slice";

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { error, isLoading, isIdle, isError, run } = useAsync<User | null>();
    const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();
    useMount(() => {
        run(dispatch(bootstrap()));
    });
    return <div>{children}</div>;
};

export const AppProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>{children}</AuthProvider>
            </QueryClientProvider>
        </Provider>
    );
};

