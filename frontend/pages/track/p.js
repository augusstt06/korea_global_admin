import React, {useState} from "react";
import {useRouter} from 'next/router';
import axios from "axios";
import Link from 'next/link';
import Side from "../../component/Side";

const TrackPosting = () => {
    // Basic Section
    const router = useRouter();
    const query  = router.query;
    // 나중에 로그인 정보로 바꾸기
    const virtualName = 'mingyu'
    console.log(query)
    const [pageInfo] = useState({
        pageTitle   : '글 작성',
        sideTitle   : '학생공간',
        theadTitle  : '제목',
        theadBody   : '내용',
        theadAuthor : '작성자',
        theadDay    : '날짜'
    });
    const [sideInfo] = useState([
        {id : 1, link : '/track', text : '창업',  query : 'startup'},
        {id : 2, link : '/track', text : '마케팅', query : 'marketing'},
        {id : 2, link : '/track', text : 'SCM', query : 'scm'},
        {id : 2, link : '/track', text : '회계/세무',   query : 'accounting'},
    ]);

    const [title,     setTitle] = useState('');
    const [content, setContent] = useState('');

    const typingTitle = (e) => {
        setTitle(e.target.value);
    };
    const typingContent = (e) => {
        setContent(e.target.value);
    };
    const removeSpace = (string) => {
        const word = string.replace(/ /g, "");
        return word.length;
    };

    // API Request Section ( POST )
    const postApi = () => {
        console.log('Now Posting...');
        axios.post(`http://127.0.0.1:8000/track/p?author=${virtualName}&category_id=${query.pages}`, {
            "title": title.trim(),
            "text" : content.trim()
        }).then(r => console.log(r));
         console.log('Posting Complete!');
    };

    const clickPost = () => {
        if(removeSpace(title) !== 0 && removeSpace(content) !== 0) {
            postApi();
            alert('작성이 완료되었습니다!');
            router.push(`/track?pages=${query.pages}`)
                .then(r => console.log(r));
        } else {
            alert('제목 또는 내용을 입력해주세요.');
        }
    };
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : sideInfo[0].id, link : sideInfo[0].link, text : sideInfo[0].text, query : sideInfo[0].query},
                    {id : sideInfo[1].id, link : sideInfo[1].link, text : sideInfo[1].text, query : sideInfo[0].query},
                ]} title = {pageInfo.sideTitle} />
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{pageInfo.pageTitle}</a>
                </div>
                <table className='postingTable'>
                    <tbody>
                        <tr>
                            <td>{pageInfo.theadAuthor}</td>
                            <td>{virtualName}</td>
                            <td>{pageInfo.theadDay}</td>
                            <td>2021.08.18</td>
                        </tr>
                        <tr>
                            <td>{pageInfo.theadTitle}</td>
                            <td colSpan='3'>
                                <textarea className='titleText'
                                          placeholder='제목을 입력하세요'
                                          onChange={typingTitle}/>
                            </td>
                        </tr>
                        <tr>
                            <td>{pageInfo.theadBody}</td>
                            <td colSpan='3'>
                                <textarea className='bodyText'
                                          placeholder='내용을 입력하세요'
                                          onChange={typingContent}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='btnContainer'>
                        <button onClick={clickPost}>
                            <a>작성완료</a>
                        </button>
                    </div>
                <div className='btnContainer'>
                    <button>
                        <Link href ={{pathname : `/track`, query : {pages : query.pages}}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TrackPosting;