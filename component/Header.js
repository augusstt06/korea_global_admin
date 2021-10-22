import React, {useState} from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";

import styles from '../styles/Header.module.scss';


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    console.log(click)
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href = '/'>
                    <a>홈</a>
                </Link>
            </div>
            <div className={styles.icon} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            { click ? 
                <nav className = {styles.menu_click} onClick = {handleClick} click={click ? 0 : 1}>
                    <div className='announce'>
                        <Link href = '/office/announce'>
                            과공지
                        </Link>
                    </div>
                    <div className='board'>
                        <Link href = '/board/free'>
                            게시판
                        </Link>
                    </div>
                    <div className='professor'>
                        <Link href = '/professor'>
                            교수
                        </Link>
                    </div>
                </nav> : 
                <nav className = {styles.menu_noclick} onClick = {handleClick} click={click ? 0 : 1}>
                    <div className='announce'>
                        <Link href = '/office/announce'>
                            과 공지
                        </Link>
                    </div>
                    <div className='board'>
                        <Link href = '/board/free'>
                            게시판
                        </Link>
                    </div>
                    <div className='professor'>
                        <Link href = '/professor'>
                            교수
                        </Link>
                    </div>
                </nav>}
        </div>
    )
}

export default Header
