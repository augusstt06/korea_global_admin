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
                    <table>
                        <tbody>
                            <td>주소</td>
                            <td>
                                <a>세종특별자치시 세종로 2511 고려대학교 세종캠퍼스</a>
                                <a>석원경상관 215호</a>
                            </td>
                            <td>번호</td>
                            <td>044-860-1520,1530,1599</td>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <td>고려대학교 포탈</td>
                            <td>
                                <Link href={{pathname:'https://portal.korea.ac.kr'}}>
                                    <a>https://portal.korea.ac.kr</a>
                                </Link>
                            </td>
                            <td>고려대학교 블랙보드</td>
                            <td>
                                <Link href={{pathname : 'https://kulms.korea.ac.kr/'}}>
                                    <a>https://kulms.korea.ac.kr/</a>
                                </Link>
                            </td>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <td>고려대학교 글로벌경영</td>
                            <td>
                                <Link href={{pathname:'http://ba.korea.ac.kr/'}}>
                                    <a>http://ba.korea.ac.kr/</a>
                                </Link>
                            </td>
                        <td>고려대학교 글로벌경영</td>
                            <td>
                                <Link href={{pathname:'http://ba.korea.ac.kr/'}}>
                                    <a>http://ba.korea.ac.kr/</a>
                                </Link>
                            </td>
                        </tbody>
                    </table>
                    {/*<ul>*/}
                    {/*    <li>ADD</li>*/}
                    {/*    <li>세종 특별자치시 세종로 2511 고려대학교 세종캠퍼스 석원경상관 215호</li>*/}
                    {/*    <li>TEL</li>*/}
                    {/*    <li>044-860-1520,1530,1599</li>*/}
                    {/*</ul>*/}
                </div>

            </div>
        </footer>
    )
}
export default Footer;