import React, {useState} from "react";
import axios from "axios";
import {LoginState} from "../recoilState/state";
import {useRecoilState} from "recoil";
import {LoginCookieValue} from "../recoilState/state";
import {setAccessCookie, setRefreshCookie, getCookie} from "../Cookie/HandleCookie";

const Login = () => {
    // Basic Section

    // const [accessAtom, setAccessAtom] = useRecoilState(LoginCookieValue);
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
        try{
            const res = await axios.post(`http://127.0.0.1:8000/login`, {
                "username" : logIn.username,
                "password" : logIn.password
            });
            console.log(res.data);
            // 비동기 요청으로 변수에 Response 담은 후 Response Token을 쿠키에 넣어서 저장
            setAccessCookie(res.data);
            setRefreshCookie(res.data);
            console.log(res);
            changeLoginState();
        } catch (err){
            console.log(err.response);
        }
    };

    return (
        <>
        {loginAtom === false ?
            <div>
                <a>로그인하셈</a>
                {/*<a>Cookie : {getCookie("access_token_cookie")}</a>*/}
            </div>

            :
            <div>굿 로그인</div>
        }
            {loginAtom === false ?
            <>
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
            </> :
                <div>
                    <button>
                        로그아웃
                    </button>
                </div>
            }
        </>
    )
};
export default Login

