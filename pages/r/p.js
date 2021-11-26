import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from 'axios';
import Link from 'next/link';
import Side from "../../component/Side";

const Post_D = () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // 필요 기능 : Post API Request (제목, 내용, 작성자,  첨부파일)

    // Basic Section
    const router = useRouter();
    const query = router.query;

    const [option] = useState({
        pageTitle : '글 작성',
        sideTitle : '학생공간',
        theadTitle : '제목',
        theadBody : '내용',
        theadAuthor : '작성자',
        theadDay : '날짜'
    });
    const [postingSide] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'},
        {id : 3, link : `/r/schedule`, text : '시간표 인벤'}
    ]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState((''));

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
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            data : {
                page : query.page,
                title : title.trim(),
                content : content.trim()
            }
        });
        console.log('Posting Complete!');
    };

    const clickPost = () => {
        if(removeSpace(title) !== 0 && removeSpace(content) !== 0) {
            postApi();
            alert('작성이 완료되었습니다!');
            router.push(`/r/${query.page}`);
        } else {
            alert('제목 또는 내용을 입력해주세요.');
        }
    };

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : postingSide[0].id, link : postingSide[0].link, text : postingSide[0].text},
                    {id : postingSide[1].id, link : postingSide[1].link, text : postingSide[1].text},
                    {id : postingSide[2].id, link : postingSide[2].link, text : postingSide[2].text}
                ]} title = {option.sideTitle} />
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <table className='postingTable'>
                    <tbody>
                        <tr>
                            <td>{option.theadAuthor}</td>
                            <td>doverr</td>
                            <td>{option.theadDay}</td>
                            <td>2021.08.18</td>
                        </tr>
                        <tr>
                            <td>{option.theadTitle}</td>
                            <td colSpan='3'>
                                <textarea className='titleText'
                                          placeholder='제목을 입력하세요'
                                          onChange={typingTitle}/>
                            </td>
                        </tr>
                        <tr>
                            <td>{option.theadBody}</td>
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
                        <Link href ={{pathname : `/r/${query.page}`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Post_D;