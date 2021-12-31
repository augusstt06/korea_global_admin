import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {setAccessCookie, setRefreshCookie, getCookie, removeCookie, setUserCookie} from "../Cookie/HandleCookie";

const Login = () => {
    // Basic Section
    const router = useRouter();

    const  [logIn, setLogIn] = useState({
        username : '',
        password : ''
    })

    const changeInput = (e) => {
        const newInput = {...logIn}
        newInput[e.target.name] = e.target.value
        setLogIn(newInput)
    };

    // API Request Section

    const doLogin = async() => {
        await axios.post(`http://localhost:8000/login`,{
            "username" : logIn.username,
            "password" : logIn.password
        }).then(r => {
            console.log(r)
            setAccessCookie(r.data[0]);
            setRefreshCookie(r.data[1]);
            window.location.reload();
        }).catch(e => {
            console.log(e)
        })
        await axios.get('http://localhost:8000/protected', {
            headers : {
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
        }).then(r => {
            setUserCookie(r.data);
        });
    };

    const doLogout = async() => {
        if(confirm("로그아웃 하시겠습니까?") === true){
           await axios.delete(`http://localhost:8000/logout`,{
            headers : {
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
            }).then(r => {
                removeCookie("access_token_cookie", "refresh_cookie");
                removeCookie("user_cookie");
                switch(router.pathname){
                    case '/r/v' :
                        router.push({pathname: '/r', query: { pages : "free" }});
                    case '/track/v' :
                        router.push({pathname: '/track', query: { pages : "accounting" }});
                    default :
                        router.reload()
                }
            }).catch(e => {
                console.log(e)
            });
        } else{
            return
        };
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
export default Login;

