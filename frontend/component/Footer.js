import React from "react";
import styles from "../styles/components/Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerInfo}>
                <div>
                    <a>[30019] 세종특별자치시 세종로 2511 고려대학교 세종캠퍼스 석원경상관 215호</a>
                </div>
                <div>
                    <div>
                        <a>TEL : 044-860-1520</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;