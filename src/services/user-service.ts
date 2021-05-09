import {LoginForm} from "types/login-form";

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (token:{ accessToken:string }) => {
    window.localStorage.setItem(localStorageKey, token.accessToken || "");
    let user = { email: "lq", username:"lq", accessToken: token };
    return user;
};

export const login = (data: LoginForm) => {
    return fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        if (response.ok) {
            return handleUserResponse(await response.json());
        } else {
            return Promise.reject(await response.json());
        }
    });
};

export const register = (data: LoginForm) => {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        if (response.ok) {
            return handleUserResponse(await response.json());
        } else {
            return Promise.reject(await response.json());
        }
    });
};
export const logout = async () => {
    window.localStorage.removeItem(localStorageKey);
};
