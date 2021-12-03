import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();

export const DetailAuthorParam = atom({
    key : "DetailAuthorParam",
    default : '',
    effects_UNSTABLE : [persistAtom]
});
export const DetailCategoryParam = atom({
    key : "DetailCategoryParam",
    default : '',
    effects_UNSTABLE : [persistAtom]
});
export const DetailIdParam = atom({
    key : "DetailIdParam",
    default : 0,
    effects_UNSTABLE : [persistAtom]
});