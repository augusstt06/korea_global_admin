import React, {useState} from 'react';
import Link from 'next/link';
import Login from "./Login";
import {getCookie} from "../Cookie/HandleCookie";
import styles from "../styles/components/Side.module.scss"
import {AiOutlinePlus} from "react-icons/ai";

const Side = (props) => {
    const items = props.items;
    const user = getCookie("user_cookie");

    const [toggle, setToggle] = useState(false);
    const clickToggle = () => {
        setToggle(!toggle);
    };

    const [info] = useState([
        {category : "학생공간", detail : [
            {id : 1, url : '/r', text : '자유', query : 'free'},
            {id : 2, url : '/r', text : '장터', query : 'market'},]},
        {category : "트랙", detail : [
            {id : 3, url : '/track', text : '창업',  query : 'startup'},
            {id : 4, url : '/track', text : '마케팅', query : 'marketing'},
            {id : 5, url : '/track', text : 'SCM', query : 'scm'},
            {id : 6, url : '/track', text : '회계/세무',   query : 'accounting'}
            ]},
    ]);

    return (
        <div className={!toggle ? styles.side : styles.sideActive}>
            <div className={!toggle ? styles.plus : styles.plusActive}
                 onClick={clickToggle}>
                <AiOutlinePlus/>
            </div>

            <div className={styles.login}>
                {getCookie("access_token_cookie") !== undefined ?
                    <div>
                        <h4>{user}</h4>
                    </div>
                    :
                    <div></div>
                }
                <Login/>
            </div>

            <ul className={styles.link}>
                <li><a>Portal</a></li>
                <li><a>BlackBoard</a></li>
                <li><a>G/Business</a></li>
                <div>
                    {info.map(data => (
                        <div key={data.detail.id} className={styles.sideHead}>
                            <a>{data.category}</a>
                            {data.detail.map(data2 => (
                                <div key={data2.id} className={styles.sideItem}>
                                    <Link href={{pathname : data2.url, query : {pages : data2.query}}}>
                                        <span>{data2.text}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </ul>
        </div>
        // <nav className='Side'>
        //     <div className='login'>
        //         {getCookie("access_token_cookie") !== undefined ?
        //         <div>{user}님 안녕하세요</div>
        //             :
        //         <div></div>
        //         }
        //         <Login/>
        //     </div>
        //     <div className='sideItem'>
        //         {items.length > 1  ? items.map((item) => (
        //             <div className='item' key = {item.id}>
        //                 <Link href = {{ pathname : `${item.link}`, query : {pages : item.query}}} key = {item.id}>
        //                     <a className='sideDetail'>{item.text}</a>
        //                 </Link>
        //             </div>
        //         )) : <div></div>}
        //     </div>
        // </nav>
    )
}

export default Side
