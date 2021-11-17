import React, {useState} from "react";
import Side from "../component/Side";

const Cy_Comment = () => {
    const [option] = useState({
        pageTitle : '내가 댓글 단 글',
        sideTitle : '마이 페이지',
        theadNum : 0,
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
    })
    const [idSide] = useState([
        {id : '힝', link : '안보이지?', text : '이스터에그인'}
    ]);
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link , text : idSide[0].text}
                ]} title ={option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <table className='boardTable'>
                    <thead>
                        <tr>
                            <th>{option.theadNum}</th>
                            <th>{option.theadTitle}</th>
                            <th>{option.theadDay}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$</td>
                            <td>$</td>
                            <td>$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Cy_Comment;