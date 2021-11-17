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
        department : `/department/free`,
        departmentText : '학생 공간',
        track : `/track`,
        trackText : '트랙',
        reservation : `/reservation`,
        reservationText : '예약',
        info : `/info`,
        infoText : '내 정보'
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
                    <div className='my_info'>
                        <Link href = {pageLink.info}>
                            <a>{pageLink.infoText}</a>
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
                    <div className='my_info'>
                        <Link href = {pageLink.info}>
                            <a>{pageLink.infoText}</a>
                        </Link>
                    </div>
                </nav>}
        </div>
    )
}

export default Header;
