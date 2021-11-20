import React, {useState} from "react";
import Side from "../component/Side";


const Mg_Post = () => {
    const [option] = useState({
        pageTitle : '작성 게시물',
        sideTitle : '이건 좀 생각을 해보자',
        theadNum : 0,
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
    });
    const [idSide] = useState([
        {id : '미정', link : `/mg`, text : '작성 게시물'},
        {id : '미정', link : `/cy`, text : '작성 댓글'},
        {id : '미정', link : `/dm`, text : '쪽지함'}
    ]);
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link, text : idSide[0].text},
                    {id : idSide[1].id, link : idSide[1].link, text : idSide[1].text},
                    {id : idSide[2].id, link : idSide[2].link, text : idSide[2].text}
                ]} title = {option.pageTitle}/>
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
export default Mg_Post;