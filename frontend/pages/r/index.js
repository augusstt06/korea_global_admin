import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Link from "next/link";
import Side from "../../component/Side";

// export const getServerSideProps = async(context) => {
//     const {query} = context;
//     const ssrUrl = `http://localhost:8000/r?pages=${query.pages}`
//     const res = await axios.get(ssrUrl, {
//         headers : (context.req.headers.cookie !== undefined ? {
//             Cookie : context.req.headers.cookie
//         } : '?'),
//         mode : "cors",
//         withCredentials : true
//     });
//     const data = res.data;
//     return {
//         props : {data}
//     }
// }
export const getServerSideProps = async(context) => {
    let data;
    const {query} = context;
    const ssrUrl = `http://localhost:8000/r?pages=${query.pages}`
    if(context.req.headers.cookie !== undefined){
        const res = await axios.get(ssrUrl, {
            headers : (context.req.headers.cookie !== undefined ? {
                Cookie : context.req.headers.cookie
            } : '?'),
            mode : "cors",
            withCredentials : true
        });
        data = res.data;

    } else{
        data = []
    }
    return {
        props : {data}
    }
}

const Room = ({data}) => {
    console.log(data.length)
    // Page Info
    const router = useRouter();
    const query  = router.query;

    const [sideInfo] = useState([
        {id : 1, link : '/r', text : '자유', query : 'free'},
        {id : 2, link : '/r', text : '장터', query : 'market'},
    ]);
    const [pageInfo] = useState({
        pageTitle   : (data.pages === 'free'   ? '자유' :
                       data.pages === 'market' ? '장터' :
                       data.pages === undefined ? "자유" : null),
        sideTitle   : '학생공간',
        theadNum    : 'No',
        theadTitle  : '제목',
        theadAuthor : '작성자',
        theadDay    : '날짜',
        postingLink : '/r/p'
    });
    const [optionValue] = useState({
        default : '선택',
        title   : '제목',
        body    : '내용',
        all     : '제목+내용'
    });

    // Save SSR Data Section in Client

    const [room,     setRoom] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        setRoom(data);
        setSearch(data);
    }, []);

    // Search Section
    const [keyword, setKeyword] = useState('');
    const [optionStatus, setOptionStatus] = useState('');

    const keywordInput = (e) => {
        setKeyword(e.target.value);
    };
    const selectOption = (e) => {
        setOptionStatus(e.target.value);
    };

    const searchTitleData = () => {
        setSearch();
        const titleData = room.filter(data => (data.title).includes(keyword) === true);
        setSearch(titleData);
    };
    const searchBodyData = () => {
        setSearch();
        const bodyData = room.filter(data => (data.body).includes(keyword) === true);
        setSearch(bodyData);
    };
    const searchAllData = () => {
        setSearch();
        const allData = room.filter(data => (data.title).includes(keyword) === true || (data.body).includes(keyword) === true);
        setSearch(allData);
    };

    const clickSearch = () => {
        switch (optionStatus){
            case 'title' :
                searchTitleData();
                break;
            case 'content' :
                searchBodyData();
                break;
            case 'all' :
                searchAllData();
                break;
            default :
                break;
        }
    };

    // Pagination Section

    const [page, setPage] = useState(0);

    const division = () => {
        const copy = [...search];
        const sliceList = [];
        const arrLen = copy.length;
        for (let i = 0; i <= Math.ceil(arrLen/10); i++){
            sliceList.push(copy.splice(0,10));
        };
        return sliceList;
    };
    const pagination = () => {
        const numList = [];
        const arrLen = division().length;
        for(let i = 1; i < arrLen; i++){
            numList.push(i);
        }
        return numList;
    };
    return (

        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : sideInfo[0].id, link : sideInfo[0].link, text : sideInfo[0].text, query : sideInfo[0].query},
                    {id : sideInfo[1].id, link : sideInfo[1].link, text : sideInfo[1].text, query : sideInfo[1].query},
                ]} title = {pageInfo.sideTitle}/>
            </div>
            { data.length !== 0 ?
            <div className='content'>
                <div className='contentTop'>
                    <div className='pageTitle'>
                        <a>{pageInfo.pageTitle}</a>
                    </div>
                    <div className='searchContainer'>
                        <select onChange={selectOption}>
                            <option value='none'>{optionValue.default}</option>
                            <option value='title'
                                    name='option'>{optionValue.title}</option>
                            <option value='content'
                                    name='option'>{optionValue.body}</option>
                            <option value='all'
                                    name='option'>{optionValue.all}</option>
                        </select>
                        <input placeholder='검색어를 입력하세요'
                               type='text'
                               name='text'
                               onChange={keywordInput}/>
                        <button type='submit'
                                onClick={clickSearch}>
                            검색
                        </button>
                    </div>
                </div>
                <table className='boardTable'>
                    <thead>
                        <tr className='tableHead'>
                            <th>{pageInfo.theadNum}</th>
                            <th>{pageInfo.theadTitle}</th>
                            <th>{pageInfo.theadAuthor}</th>
                            <th>{pageInfo.theadDay}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {division()[page].map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>
                                <Link href={{pathname : `/r/v`, query : { board_id : data.id , pages : router.query.pages}}}>
                                    <a>{data.title}</a>
                                </Link>
                            </td>
                            <td>{data.author}</td>
                            <td><a>{data.updated_at}</a></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className='contentBottom'>
                    <div className='pagination'>
                        {pagination().map(data => (
                            <div key={data}>
                                <button onClick={() => {setPage(data-1)}}>
                                    {data}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='btnContainer'>
                        <button>
                            <Link href = {{pathname : pageInfo.postingLink , query : {author : 'mingyu',pages : query.pages}}}>
                                <a>글 작성</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
                : <h2>로그인이 필요합니다</h2>}
        </div>
    )
};

export default Room;