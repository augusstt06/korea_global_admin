import React from 'react';
import Link from 'next/link';
import Login from "./Login";


const Side = (props) => {
    const items = props.items;

    return (
        <nav className='Side'>
            <div className='login'>
                <div>
                    내 정보
                </div>
                <Login/>
            </div>
            <div className='sideItem'>
                {items.length > 1  ? items.map((item) => (
                    <div className='item' key = {item.id}>
                        <Link href = {{ pathname : `${item.link}`, query : {pages : item.query}}} key = {item.id}>
                            <a className='sideDetail'>{item.text}</a>
                        </Link>
                    </div>
                )) : <div>왜 시팔</div>}
            </div>
        </nav>
    )
}

export default Side
