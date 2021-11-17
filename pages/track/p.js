import React, {useState} from "react";
import {useRouter} from 'next/router';
import Link from 'next/link';
import Side from "../../component/Side";

const Post_T = () => {
    // request : 제목, 내용, 작성자, 첨부파일
    const { pageQuery } = useRouter().query;

    const [option] = useState({
        pageTitle : 'Posting',
        sideTitle : '트랙',
        theadTitle : '제목',
        theadBody : '내용',
        theadAuthor : 'api',
        theadDay : 'api'
    });
    const [postingSide] = useState([
        {id : 3, link : `/track/accounting`, text : '회계'},
        {id : 4, link : `/track/marketing`, text : '마케팅'}
    ]);
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : postingSide[0].id, link : postingSide[0].link, text : postingSide.text},
                    {id : postingSide[1].id, link : postingSide[1].link, text : postingSide.text}
                ]} title = {option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <div className='postingTable'>
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
                            <td>작성자 api</td>
                            <td>날짜 api</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <textarea placeholder='제목을 입력하세요'
                                          value='title'/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <textarea placeholder='내용을 입력하세요'
                                          value='body'/>
                            </td>
                        </tr>
                    </tbody>
                    <div className='btnContainer'>
                        <button>
                            <a>작성 완료</a>
                        </button>
                    </div>
                </div>
                <div className='btnContainer'>
                    <button>
                        <Link href = {{pathname : `/track/${pageQuery}`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Post_T;