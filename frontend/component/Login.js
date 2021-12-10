import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {LoginState} from "../recoilState/state";
import {useRecoilState} from "recoil";
import {setAccessCookie, setRefreshCookie, getCookie, removeCookie} from "../Cookie/HandleCookie";

const Login = () => {
    // Basic Section
    const router = useRouter();
    const [loginAtom, setLoginAtom] = useRecoilState(LoginState);
    const changeLoginState = () => {
        setLoginAtom(!loginAtom);
    };

    const  [logIn, setLogIn] = useState({
        username : '',
        password : ''
    })

    const changeInput = (e) => {
        const newInput = {...logIn}
        newInput[e.target.name] = e.target.value
        setLogIn(newInput)
    };
    const doLogin = async() => {
        await axios.post(`http://localhost:8000/login`,{
            "username" : logIn.username,
            "password" : logIn.password
        }).then(r => {
            setAccessCookie(r.data[0]);
            setRefreshCookie(r.data[1]);
            changeLoginState();
            window.location.reload();
        }).catch(e => {
            console.log(e)
        })
    }
    const doLogout = async() => {
        await axios.delete(`http://localhost:8000/logout`,{
            headers : {
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
        }).then(r => {
            removeCookie("access_token_cookie");
            removeCookie("refresh_token_cookie");
            if(router.pathname === '/r/v'){
                history.go(-1)
            } else{
             window.location.reload()
            }
        }).catch(e => {
            console.log(e)
        })
    };

    return (
        <>
        {getCookie("access_token_cookie") === undefined ?
            <div>
                <div><a>로그인이 필요합니다</a></div>
                <div className = 'inputLogin'>
                    <input type='text'
                            placeholder ='ID'
                            name = 'username'
                            value = {logIn.username}
                            onChange={changeInput}/>
                    <input type='password'
                            placeholder ='PWD'
                            name = 'password'
                            value = {logIn.password}
                            onChange = {changeInput}/>
                </div>
                <div>
                    <button onClick={doLogin}>로그인</button>
                </div>
            </div>
            :
            <div>
                <button onClick={doLogout}>
                    Log Out
                </button>
            </div>
        }
        </>
    )
};
export default Login

