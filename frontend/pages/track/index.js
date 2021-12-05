import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Link from "next/link";
import Side from "../../component/Side";

const Track = () => {
    // Page Info
    const router = useRouter();
    const query  = router.query;

    const [sideInfo] = useState([
        {id : 1, link : '/track', text : '창업',  query : 'startup'},
        {id : 2, link : '/track', text : '마케팅', query : 'marketing'},
        {id : 2, link : '/track', text : 'SCM', query : 'scm'},
        {id : 2, link : '/track', text : '회계/세무',   query : 'accounting'},
    ]);
    const [pageInfo] = useState({
        pageTitle   : (router.query.pages === 'startup'       ? '창업' :
                       router.query.pages === 'marketing'     ? '마케팅':
                       router.query.pages === 'scm'           ? 'SCM' :
                       router.query.pages === 'accounting'    ? '회계/세무' : null),
        sideTitle   : '트랙',
        theadNum    : 'No',
        theadTitle  : '제목',
        theadAuthor : '작성자',
        theadDay    : '날짜',
        postingLink : '/track/p'
    });
    const [optionValue] = useState({
        default : '선택',
        title   : '제목',
        body    : '내용',
        all     : '제목+내용'
    });

    // API Request Section ( GET )
    const [track,   setTrack] = useState([]);
    const [search, setSearch] = useState([]);

    const getTrackList = async() => {
        console.log('Now Loading...');
        const res = await axios.get(`http://127.0.0.1:8000/track?pages=${query.pages}`);
        setTrack(res.data);
        setSearch(res.data);
        console.log('Finish Loading!')
    };
    useEffect(() => {
        getTrackList()
            .then(r => console.log(r));
    }, []);

    // Search Section
    const [keyword,           setKeyword] = useState('');
    const [optionStatus, setOptionStatus] = useState('');

    const keywordInput = (e) => {
        setKeyword(e.target.value);
    };
    const selectOption = (e) => {
        setOptionStatus(e.target.value);
    };

    const searchTitleData = () => {
        setSearch();
        const titleData = track.filter(data => (data.title).includes(keyword) === true);
        setSearch(titleData);
    };
    const searchBodyData = () => {
        setSearch();
        const bodyData = track.filter(data => (data.body).includes(keyword) === true);
        setSearch(bodyData);
    };
    const searchAllData = () => {
        setSearch();
        const allData = track.filter(data => (data.title).includes(keyword) === true || (data.body).includes(keyword) === true);
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
                    {id : sideInfo[2].id, link : sideInfo[2].link, text : sideInfo[2].text, query : sideInfo[2].query},
                    {id : sideInfo[3].id, link : sideInfo[3].link, text : sideInfo[3].text, query : sideInfo[3].query},
                ]} title = {pageInfo.sideTitle}/>
            </div>
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
                        <tr key={data.title}>
                            <td>{data.id}</td>
                            <td>
                                <Link href={{pathname : `/track/v`, query : { board_id : data.id , pages : query.pages}}}>
                                    <a>{data.title}</a>
                                </Link>
                            </td>
                            <td>{data.author}</td>
                            <td><a>{data.updated_at[0,9]}</a></td>
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
        </div>
    )
};
export default Track;