import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from 'next/link';
import Side from "../../../../component/Side";

const Detail_marketing = () => {
    const { pageQuery } = useRouter().query;

    const [option] = useState({
        pageTitle : '작성 글 상세',
        sideTitle : '트랙',
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
        theadAuthor : '작성자'
    })
    const [idSide] = useState([
        {id : 3, link : `/track/accounting`, text : '회계'},
        {id : 4, link : `/track/marketing`, text : '마케팅'}
    ])

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link, text : idSide[0].text},
                    {id : idSide[1].id, link : idSide[1].link, text : idSide[1].text}
                ]} title = {option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <table className='detailTable'>
                    <thead>
                        <tr>
                            <th>{option.theadAuthor}</th>
                            <th>{option.theadDay}</th>
                        </tr>
                        <tr>
                            <th colSpan='2'>{option.pageTitle}</th>
                        </tr>
                        <tr>
                            <th colSpan='2'>{option.theadBody}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>작성자 api</td>
                            <td>날짜 api</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>제목 api</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>내용 api</td>
                        </tr>
                    </tbody>
                </table>
                <div className='commentContainer'>
                    <div className='postingComment'>
                        <div className='typingComment'>
                            <textarea placeholder='댓글을 입력하세요'
                                      value='comment'/>
                        </div>
                        <div className='btnContainer'>
                            <button>
                                <a>댓글 작성</a>
                            </button>
                        </div>
                    </div>
                    {/* commentList는 response로 맵핑*/}
                    <div className='commentList'>
                        <div className='commentId'>
                            댓글 작성자 ID
                        </div>
                        <div className='comment'>
                            <a>댓글 내용</a>
                            <div className='reComment'>
                            대댓글
                        </div>
                        </div>
                    </div>
                </div>
                <div className='btnContainer'>
                    <button>
                        <Link href ={{pathname : `/track/${pageQuery}`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Detail_marketing;