import React, {useState} from 'react';
import Link from 'next/link';

const Side = (props) => {
    const items = props.items;
    
    const  [input, setInput] = useState({
        id : '',
        password : ''
    })
    const changeInput = (e) => {
        const newInput = {...input}
        newInput[e.target.name] = e.target.value
        setInput(newInput)
    }
    return (
        <nav className='Side'>
            <div className='login'>
                <div>
                    내 정보
                </div>
                <div className = 'inputLogin'>
                    <input type='text'
                            placeholder ='ID'
                            name = 'id'
                            value = {input.id}
                            onChange={changeInput}/>
                    <input type='password'
                            placeholder ='PWD'
                            name = 'password'
                            value = {input.password}
                            onChange = {changeInput}/>
                </div>
                <div>
                    <button>로그인</button>
                </div>
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
