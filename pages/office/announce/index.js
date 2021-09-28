import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

import Side from '../../../component/Side'

// 공지 전용 테이블 존재
// 여기도 검색기능 free에서 갖다쓰셈 일단 지금은 안할거임
const Announce = () => {
    const [announce, setAnnounce] = useState([]);

    const announceData = async() => {
        console.log('Now Loading...');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
        setAnnounce(res.data);
        console.log('Finish Loading');
    }
    useEffect(() => {
        announceData();
    }, [])
    console.log(announce)
    return (
        <div className='office'>
            <div className='component'>
                <Side items = {[
                    {id : 5, link : '/office/question', text : 'Q&A'}
                ]} title = '글로벌경영학부' />
            </div>
            <div className='content'>
                <h1>과 공지</h1>
                {/* <div className='search'>
                    <select  onChange={checkOption} className='option'>
                        <option value = 'none' >선택</option>
                        <option value = 'title'>제목</option>
                        <option value = 'body'>내용</option>
                    </select>
                    <input type = 'text'
                            name = 'keyword'
                            onChange={searchInput}
                            className='inputText'/>
                    <button type = 'submit'
                            onClick={clickSearch}
                            className='button'
                            >검색</button>
                </div> */}
                <div className='contentBox'>
                    <table className='table'>
                        <thead>
                            <tr className='contentHeader'>
                                <th>번호</th>
                                <th>제목</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            announce.map(announce => (
                                <tr className='contentBody' key = {announce.id}>
                                    <td>xxx</td>
                                    <td>
                                    <Link href = {{pathname : `/office/announce/${announce.id}`}}>
                                        {announce.title}
                                    </Link>
                                    </td>
                                    <td>xx.xxx.xxx</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                
            </div>
            <style jsx>{`
            
            .office{
                display: flex;
                position :relative;
            }
            .component {
                margin-left : 20px;
                height : 150px;
                margin-right : 20px;
                position: relative;
                top : 120px
            }
            table{
                width :  1000px;
            }
            .contentBox {
                table-layout : fixed;
                /* width : 750px */
                border-top : 1px solid black;
                /* border-bottom : 1px solid black; */
                padding : 10px 5px;
                
            }
            tr {
                padding: 10px;
            }
            
            td {
                padding: 10px;
                text-align : center;
                border-bottom : 1px dotted black;
            }
            `}
        </style>
        </div>
    )
}

export default Announce
