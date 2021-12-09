import React from "react";
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();

export const setAccessCookie = (value) => {
    return cookies.set("access_token_cookie", value, {path:'/'});
};
export const setRefreshCookie = (value) => {
    return cookies.set("refresh_token_cookie", value, {path:'/'});
}
export const getCookie = (name) => {
    return cookies.get(name)
};