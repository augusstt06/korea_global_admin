import React from "react";
import Cookies from "universal-cookie/lib";

// 나중에 쿠키 넘어오는거 확인 다시 하기

const cookies = new Cookies();

export const setAccessCookie = (value) => {
    return cookies.set("access_token_cookie", value, {path:'/'});
};
export const setRefreshCookie = (value) => {
    return cookies.set("refresh_token_cookie", value, {path:'/'});
};
export const setUserCookie = (value) => {
    return cookies.set("user_cookie", value, {path:'/'});
}

export const getCookie = (name) => {
    return cookies.get(name)
};
export const removeCookie = (name) => {
    return cookies.remove(name)
};