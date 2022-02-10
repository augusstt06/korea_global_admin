import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from 'next/link';
import {AiOutlinePlus} from "react-icons/ai";
import styles from '../styles/components/Header.module.scss';

const Header = () => {
    const router = useRouter();
    const goHome = () => {
        router.push('/');
    };

    const [toggle, setToggle] = useState(false);
    const clickToggle = () => {
        setToggle(!toggle);
    };

    const pageUrl = useState([
        {name : '학생공간', url : '/r', query : 'free'},
        {name : '트   랙', url : '/track', query :'accounting'},
        {name : '쪽지함', url : '/dm'}
    ]);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a>Global</a>
                <a>Business</a>
                <div className={styles.home} onClick={goHome}>
                    <a>Go</a>
                    <a>Home</a>
                </div>
            </div>
            <div className={!toggle ? styles.menu : styles.menuActive}>
                <ul>
                {pageUrl[0].map(data => (
                    <li key={data.url}>
                        <a>
                            <Link href={{pathname : data.url, query : {pages : data.query}}}>
                                {data.name}
                            </Link>
                        </a>
                    </li>
                ))}
                </ul>
            </div>
            <div className={!toggle ? styles.plus : styles.plusActive}>
                <h2 onClick={clickToggle}><AiOutlinePlus/></h2>
            </div>
        </div>
    )
}

export default Header;
