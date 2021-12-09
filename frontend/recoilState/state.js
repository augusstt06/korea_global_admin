import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();

export const LoginState = atom({
    key : 'LoginState',
    default : false
});

export const LoginCookieValue = atom({
    key: "LoginCookieValue",
    default : []
});

