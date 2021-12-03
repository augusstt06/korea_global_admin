import React, {useState} from "react";
import Link from 'next/link';
import Side from "../../../component/Side";

const Market = () => {
    const [rSide] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'},
        {id : 3, link : `/r/schedule`, text : '시간표 인벤'}
    ]);
    const [option] = useState({
        pageTitle : '장터',
        sideTitle : '학생공간',
        theadNum : 'No',
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : '날짜'
    })
    const [pageLink] = useState({
        postingLink : `/r/p`
    })
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : rSide[0].id, link : rSide[0].link , text : rSide[0].text},
                    {id : rSide[1].id, link : rSide[1].link , text : rSide[1].text},
                    {id : rSide[2].id, link : rSide[2].link , text : rSide[2].text}
                ]} title = {option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <div>{option.pageTitle}</div>
                </div>
                <table className='boardTable'>
                    <thead>
                        <tr className='tableHead'>
                            <th>{option.theadNum}</th>
                            <th>{option.theadTitle}</th>
                            <th>{option.theadAuthor}</th>
                            <th>{option.theadDay}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 이 부분은 나중에 response 데이터로 맵핑 /// query로 게시글 id값 전달*/}
                        <tr className='tableBody'>
                            <td>=</td>
                            <td>=</td>
                            <td>=</td>
                            <td>=</td>
                        </tr>
                    </tbody>
                </table>
                <div className='btnContainer'>
                    <button>
                        <Link href = {{pathname : pageLink.postingLink , query : {page : 'market'}}}>
                            글 작성
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Market;