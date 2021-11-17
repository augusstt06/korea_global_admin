import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from 'next/link';
import Side from "../../component/Side";

const Post_D = () => {
    // request : 제목, 내용, 작성자, 첨부파일
    const { pageQuery } = useRouter().query;

    const [option] = useState({
        pageTitle : 'Posting',
        sideTitle : '학생공간',
        theadTitle : '제목',
        theadBody : '내용',
        theadAuthor : 'api',
        theadDay : 'api'
    });
    const [postingSide] = useState([
        {id : 1, link : `/department/free`, text : '자유'},
        {id : 2, link : `/department/market`, text : '장터'}
    ]);
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : postingSide[0].id, link : postingSide[0].link, text : postingSide[0].text},
                    {id : postingSide[1].id, link : postingSide[1].link, text : postingSide[1].text}
                ]} title = {option.sideTitle} />
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <table className='postingTable'>
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
                            <a>작성완료</a>
                        </button>
                    </div>
                </table>
                <div className='btnContainer'>
                    <button>
                        <Link href ={{pathname : `/department/${pageQuery}`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Post_D;