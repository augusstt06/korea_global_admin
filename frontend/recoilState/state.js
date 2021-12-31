import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();

export const LoginState = atom({
    key : 'LoginState',
    default : false
});

export const AccessCookieValue = atom({
    key : "AccessCookieValue",
    default : ''
});
export const RefreshCookieValue = atom({
    key : "RefreshCookieValue",
    default : ''
})
