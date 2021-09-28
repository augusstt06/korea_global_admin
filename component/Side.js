import React, {useState} from 'react';
import Link from 'next/link';

const Side = (props) => {
    const items = props.items;
    const title = props.title;
    
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
        <nav>
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
            {/* <div className='sideTitle'>{title}</div> */}
            <div className='sideItem'>
                {items.map((item) => (
                    <div className='item' key = {item.id}>
                        <Link href = {{ pathname : `${item.link}`}} key = {item.id}>
                            <a className='sideDetail'>{item.text}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <style jsx>{`
                
                nav {
                    border : 1px solid black;
                    width : 190px;
                }
                .login {
                    text-align : center;
                    padding :10px;
                    border-bottom : 1px dotted black;
                }
                input {
                    padding: 5px;
                    margin-top : 5px;
                }
                button {
                    padding: 2px;
                    margin-top : 5px;
                }
                .sideItem {
                    display : block;
                    flex-direction : column;
                    align-items: center;
                    /* border-top : 1px dotted black; */
                    text-align : center;
                }
                /* .sideTitle {
                    text-align : center;
                    padding :10px;
                } */
                .sideDetail {
                    width : 100%;
                    padding : 10px;
                    
                    text-align : center;
                }
                .item{
                    border-bottom : 1px solid black;
                    padding: 5px;
                }
                .item:hover {
                    background: black;
                    color : white;
                }
            `}

            </style>
        </nav>
    )
}

export default Side
