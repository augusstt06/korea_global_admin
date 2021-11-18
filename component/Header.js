import React, {useState} from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/Header.module.scss';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const [pageLink] = useState({
        main : '/',
        mainText : '홈',
        department : `/r/free`,
        departmentText : '학생 공간',
        track : `/track/accounting`,
        trackText : '트랙',
        reservation : `/reservation`,
        reservationText : '예약',
    })
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href = {pageLink.main}>
                    <a>{pageLink.mainText}</a>
                </Link>
            </div>
            {click ?
                <div className={styles.icon_click} onClick={handleClick}>
                    <FaTimes />
                </div> :
                <div className={styles.icon} onClick={handleClick}>
                    <FaBars />
                </div>}
            {/*<div className={styles.icon} onClick={handleClick}>*/}
            {/*    {click ? <FaTimes /> : <FaBars />}*/}
            {/*</div>*/}
            { click ? 
                <nav className = {styles.menu_click}  click={click ? 0 : 1}>
                    <div className='announce'>
                        <Link href = {pageLink.department}>
                            <a>{pageLink.departmentText}</a>
                        </Link>
                    </div>
                    <div className='board'>
                        <Link href = {pageLink.track}>
                            <a>{pageLink.trackText}</a>
                        </Link>
                    </div>
                    <div className='professor'>
                        <Link href = {pageLink.reservation}>
                            <a>{pageLink.reservationText}</a>
                        </Link>
                    </div>
                </nav> : 
                <nav className = {styles.menu_noclick}  click={click ? 0 : 1}>
                    <div className='announce'>
                        <Link href = {pageLink.department}>
                            <a>{pageLink.departmentText}</a>
                        </Link>
                    </div>
                    <div className='board'>
                        <Link href = {pageLink.track}>
                            <a>{pageLink.trackText}</a>
                        </Link>
                    </div>
                    <div className='professor'>
                        <Link href = {pageLink.reservation}>
                            <a>{pageLink.reservationText}</a>
                        </Link>
                    </div>
                </nav>}
        </div>
    )
}

export default Header;
