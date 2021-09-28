import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link href = '/'>
                    홈
                </Link>
            </div>
            <nav className = 'menu'>
                <div>
                    <Link href = '/office/announce'>
                        과공지
                    </Link>
                </div>
                <div>
                    <Link href = '/board/free'>
                        게시판
                    </Link>
                </div>
                <div>
                    <Link href = '/professor'>
                        교수
                    </Link>
                </div>
            </nav>
            <style jsx>{`
                .header{
                    height: 80px;
                    display: flex;
                    justify-content : space-around;
                    align-items : center;
                    position : sticky;
                    font-size: 1.2rem;
                    top: 0;
                    background: gray;
                }
                .logo{
                    justify-self : flex-start;
                    cursur : pointer;
                    font-size : 2rem;
                    align-items : center;
                    display: flex;
                }
                div {
                    text-align : center;
                    align-items : center;
                }
                .menu {
                    display: flex;
                    /* background :  blue; */
                    align-items: center;   
                }
                .menu > div {
                    margin-right : 20px;
                }
            `}
            </style>
        </div>
    )
}

export default Header
