import React, {useState} from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    
    
    return (
        <div className='header'>
            <div className='logo'>
                <Link href = '/'>
                    <a>홈</a>
                </Link>
            </div>
            <div className="icons" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <nav className = 'menu' onClick={handleClick} >
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
                    background: #fff5f5;
                    z-index : 999;
                }
                .logo{
                    justify-self : flex-start;
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
                    align-items: center;   
                    
                }
                .menu > div {
                    margin-right : 20px;
                }
                .icons {
                    display: none;
                }
                @media screen and (max-width : 960px) {
                    .logo{
                        position: absolute;
                        left: 150px;
                    }
                    .icons {
                        display: block;
                        position : absolute;
                        top: 12px;
                        right : 12px;
                        width: 35px;
                        height: 28px;
                        z-index: 999;  
                    }
                    .menu {
                        display: flex;
                        flex-direction : column;
                        width : 100%;
                        height: 80px;
                        position : absolute;
                        top: 80px;
                        /* left: ${({click}) => (click ? 0 : '-100%')}; */

                    }
                }                
            `}
            </style>
        </div>
    )
}

export default Header
