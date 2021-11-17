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
                    <ul>
                        <li>ADD</li>
                        <li>세종 특별자치시 세종로 2511 고려대학교 세종캠퍼스</li>
                        <li>TEL</li>
                        <li>044-860-1520</li>
                    </ul>
                </div>
                <div className={styles.univRelation}>
                    <ul>
                        <li>글로벌 경영 공식 사이트</li>
                        <li>
                            <Link href ={{pathname : `http://ba.korea.ac.kr/`}}>
                                <a>http://ba.korea.ac.kr/</a>
                            </Link>
                        </li>
                        <li>고려대학교 포탈</li>
                        <li>
                            <Link href = {{pathname : `https://portal.korea.ac.kr/front/Intro.kpd`}}>
                                <a>https://portal.korea.ac.kr/front/Intro.kpd</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;