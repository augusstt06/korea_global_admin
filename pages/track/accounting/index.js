import React, {useState} from "react";
import Link from 'next/link';
import Side from "../../../component/Side";


const Accounting = () => {
    const [trackSide] = useState([
        {id : 3, link : `/track/accounting`, text : '회계'},
        {id : 4, link : `/track/marketing`, text : '마케팅'}
    ]);
    const [option] = useState({
        pageTitle : '회계',
        trackTitle : '트랙',
        theadNum : 'No',
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : '날짜'
    })
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : trackSide[0].id, link : trackSide[0].link, text : trackSide[0].text},
                    {id : trackSide[1].id, link : trackSide[1].link, text : trackSide[1].text}
                ]} title = {option.trackTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
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
                    {/* 이 부분은 나중에 response 데이터로 맵핑 /// link query로 게시글 id값 전달*/}
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
                    <Link href = {{pathname : `/track/p`, query : 'accounting'}}>
                        <a>글 작성</a>
                    </Link>
                </button>
            </div>
            </div>
        </div>
    )
}
export default Accounting;