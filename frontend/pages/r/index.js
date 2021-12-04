import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Link from "next/link";
import Side from "../../component/Side";


const Room = () => {
    // Page Info
    const router = useRouter();
    const [sideInfo] = useState([
        {id : 1, link : '/r', text : '자유', query : 'free'},
        {id : 2, link : '/r', text : '장터', query : 'market'},
    ]);
    const [pageInfo] = useState({
        pageTitle : '자유',
        sideTitle : '학생공간',
        theadNum : 'No',
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : '날짜',
        postingLink : '/r/p'
    });
    const [optionValue] = useState({
        default : '선택',
        title : '제목',
        body : '내용',
        all : '제목+내용'
    });

    // API Request Section ( GET )
    const [room, setRoom] = useState([]);
    const [search, setSearch] = useState([]);

    const getRoomList = async() => {
        console.log("글 리스트를 불러오고 있습니다...")
        const res = await axios.get(`http://127.0.0.1:8000/r?pages=${router.query.pages}`);
        setRoom(res.data);
        setSearch(res.data);
        console.log("리스트 불러오기에 성공했습니다!");
    };

    useEffect(() => {
        getRoomList();
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

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : sideInfo[0].id, link : sideInfo[0].link, text : sideInfo[0].text, query : sideInfo[0].query},
                    {id : sideInfo[1].id, link : sideInfo[1].link, text : sideInfo[1].text, query : sideInfo[1].query},
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
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>
                                <Link href={{pathname : `/r/v`, query : { board_id : data.id , pages : router.query.pages}}}>
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
                            <Link href = {{pathname : pageInfo.postingLink , query : {author : 'mingyu',pages : router.query.pages}}}>
                                <a>글 작성</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Room;