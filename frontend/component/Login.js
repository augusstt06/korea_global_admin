import React, {useState} from "react";
import axios from "axios";
import {LoginState} from "../recoilState/state";
import {useRecoilState} from "recoil";
import {setAccessCookie, setRefreshCookie, getCookie} from "../Cookie/HandleCookie";

const Login = () => {
    // Basic Section
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
            // 비동기 요청으로 변수에 Response 담은 후 Response Token을 쿠키에 넣어서 저장
            setAccessCookie(res.data[0]);
            setRefreshCookie(res.data[1]);
            changeLoginState();
        } catch (err){
            console.log(err.response);
        }
    };
    return (
        <>
        {getCookie("access_token_cookie") === undefined ?
            <div>
                <div>로그인</div>
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
                <div>로그인</div>
                <button>
                    Log Out
                </button>
            </div>
        }
        </>
    )
};
export default Login

