import React from "react";
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.univLogo}>
                    여기 로고 자리
                </div>
                <div className={styles.univInfo}>
                    <ul className={styles.ulHead}>
                        <li>주소</li>
                        <br/>
                        <li>번호</li>
                    </ul>
                    <ul>
                        <li>세종특별자치시 세종로 고려대학교 세종 캠퍼스</li>
                        <li>석원경상관 215호</li>
                        <li>044-860-1520</li>
                    </ul>
                    <ul className={styles.ulHead}>
                        <li>고려대학교 포탈</li>
                        <li>고려대학교 블랙보드</li>
                        <li>글로벌 경영</li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={{pathname : 'https://portal.korea.ac.kr'}}>
                                <span>https://portal.korea.ac.kr</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={{pathname : 'https://kulms.korea.ac.kr/'}}>
                                <span>https://kulms.korea.ac.kr/</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={{pathname : 'http://ba.korea.ac.kr/'}}>
                                <span>http://ba.korea.ac.kr/</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
export default Footer;