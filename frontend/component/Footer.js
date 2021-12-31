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
                        <li>석원경상관 215호 [30019]</li>
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
                <div className={styles.proInfo}>
                    <ul className={styles.ulHead}>
                        <li className={styles.front}>
                            <span>개발 / 디자인</span>
                        </li>
                        <li className={styles.back}>
                            <span>api 개발 / 배포</span>
                        </li>
                    </ul>
                    <ul className={styles.ulHead}>
                        <li className={styles.front}>
                            <Link href={{pathname : `https://github.com/augusstt06`}}>
                                <span>https://github.com/augusstt06</span>
                            </Link>
                        </li>
                        <li className={styles.back}>
                            <Link href={{pathname : `https://github.com/MingueKim`}}>
                                <span>https://github.com/MingueKim</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
export default Footer;