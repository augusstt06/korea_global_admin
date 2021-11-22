import React, {useState, useEffect} from "react";
import Link from 'next/link';
import Side from "../../../component/Side";
import axios from 'axios';

const Free = () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // 필요 기능 : Get API Connect => Response Data Mapping => Rendering
    //           Mapping Data => Search : Done!
    //           Pagination

    // Basic Section
    const [rSide] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'},
        {id : 3, link : `/r/schedule`, text : '시간표 인벤'}
    ]);
    const [option] = useState({
        pageTitle : '자유',
        sideTitle : '학생공간',
        theadNum : 'No',
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : '날짜'
    })
    const [pageLink] = useState({
        postingLink : `/r/p`
    });

    // API Request Section

    const [free, setFree] = useState([]);
    const [search, setSearch] = useState([]);
    const freeApi = async () => {
        console.log('Now Loading...');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setFree(res.data);
        setSearch(res.data);
        console.log('Finish Loading!');
    };
    useEffect(() => {
        freeApi();
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
        const titleData = free.filter(data => (data.title).includes(keyword) === true);
        setSearch(titleData);
    };
    const searchBodyData = () => {
        setSearch();
        const bodyData = free.filter(data => (data.body).includes(keyword) === true);
        setSearch(bodyData);
    };
    const searchAllData = () => {
        setSearch();
        const allData = free.filter(data => data.includes(keyword) === true);
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

    const division = () => {
        const copy = [...search];
        const sliceList = [];
        const arrLen = copy.length;
        for (let i = 0; i <= Math.ceil(arrLen/10); i++){
            sliceList.push(copy.splice(0,10));
        };
        return sliceList;
    };
    const [page, setPage] = useState(0);

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
                    {id : rSide[0].id, link : rSide[0].link , text : rSide[0].text},
                    {id : rSide[1].id, link : rSide[1].link , text : rSide[1].text},
                    {id : rSide[2].id, link : rSide[2].link , text : rSide[2].text}
                ]} title ={option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='contentTop'>
                    <div className='pageTitle'>
                        <div>{option.pageTitle}</div>
                    </div>
                    <div className='searchContainer'>
                        <select onChange={selectOption}>
                            <option value='none'>선택</option>
                            <option value='title'
                                    name='option'>제목</option>
                            <option value='content'
                                    name='option'>내용</option>
                            <option value='all'
                                    name='option'>제목+내용</option>
                        </select>
                        <input placeholder='검색어를 입력하세요'
                               type='text'
                               name='text'
                               onChange={keywordInput}/>
                        <button type='submit'
                                onClick={clickSearch}
                                >검색</button>
                    </div>
                </div>
                <table className='boardTable'>
                    <thead>
                        <tr className='tableHead'>
                            <th>{option.theadNum}</th>
                            <th>{option.theadTitle}</th>
                            <th>{option.theadAuthor}</th>
                            <th>{option.theadDay}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* Response Data Mapping*/}
                    {division()[page].map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>
                                <Link href={{pathname : `/r/free/v/${data.id}`, query : {page : 'free'}}}>
                                    {data.title}
                                </Link>
                            </td>
                            <td>{data.userId}</td>
                            <td><a>2021.08.18</a></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className='pagination'>
                    {pagination().map(data => (
                        <div key={data}>
                            <button onClick={() => {setPage(data-1)}}>{data}</button>
                        </div>
                    ))}
                </div>
                <div className='btnContainer'>
                    <button>
                        <Link href = {{pathname : pageLink.postingLink , query : {page : 'free'}}}>
                            글 작성
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Free;