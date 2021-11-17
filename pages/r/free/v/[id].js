import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from 'next/link';
import Side from "../../../../component/Side";

const Detail_free =  () => {
    const { pageQuery } = useRouter().query;
    const [option] = useState({
        pageTitle : '작성 글 상세',
        sideTitle : '학생공간',
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
        theadAuthor : '작성자'
    })
    const [idSide] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'}
    ]);

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
                            <th colSpan='2'>{option.theadTitle}</th>
                        </tr>
                        <tr>
                            <th colSpan='2'>{option.theadBody}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>작성자 Response</td>
                            <td>날짜 Response</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>제목 Response</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>내용 Response</td>
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
                    <div className='commentList'>
                        <div className='commentId'>
                            <a>댓글 작성자 ID</a>
                        </div>
                        <div className='comment'>
                            <a>댓글 내용</a>
                        </div>
                        <div className='reComment'>
                            <a>대댓글</a>
                        </div>
                    </div>
                </div>
                <div className='btnContainer'>
                    <button>
                        <Link href = {{pathname : `/r/${pageQuery}`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Detail_free;