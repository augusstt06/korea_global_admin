import React from 'react';
import Link from 'next/link';
import Login from "./Login";
import {getCookie} from "../Cookie/HandleCookie";

const Side = (props) => {
    const items = props.items;
    const user = getCookie("user_cookie");

    return (
        <nav className='Side'>
            <div className='login'>
                {getCookie("access_token_cookie") !== undefined ?
                <div>{user}님 안녕하세요</div>
                    :
                <div></div>
                }
                <Login/>
            </div>
            <div className='sideItem'>
                {items.length > 1  ? items.map((item) => (
                    <div className='item' key = {item.id}>
                        <Link href = {{ pathname : `${item.link}`, query : {pages : item.query}}} key = {item.id}>
                            <a className='sideDetail'>{item.text}</a>
                        </Link>
                    </div>
                )) : <div></div>}
            </div>
        </nav>
    )
}

export default Side
