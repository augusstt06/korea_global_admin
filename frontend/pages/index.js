import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Side from "../component/Side";
import axios from "axios";

export const getServerSideProps = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data
    return {
        props : {data}
    };
};
const Main = ({data}) => {
    // Basic Section
    const [option] = useState({
        pageTitle : '공지사항',
        theadNum : 'No',
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : '날짜'
    });
    const [optionValue] = useState({
        default : '선택',
        title : '제목',
        body : '내용',
        all : '제목+내용'
    });

    // API Request Section

    const [main, setMain] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        setMain(data);
        setSearch(data);
    }, [data]);

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
        const titleData = main.filter(main => (main.title).includes(keyword) === true);
        setSearch(titleData);
    };
    const searchBodyData = () => {
        setSearch();
        const bodyData = main.filter(main => (main.body).includes(keyword) === true);
        setSearch(bodyData);
    };
    const searchAllData = () => {
        setSearch();
        const allData = main.filter(main => (main.title).includes(keyword) === true || (main.body).includes(keyword) === true);
        setSearch(allData);
    };
    const clickSearch = () => {
        switch(optionStatus){
            case "title" :
                searchTitleData();
                break;
            case "body" :
                searchBodyData();
                break;
            case "all" :
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
        for (let i = 1; i < arrLen; i++){
            numList.push(i);
        }
        return numList;
    };

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : 1, link : `/`, text : '아직 미정'}
                ]} title='아직 미정'/>
            </div>
            <div className='content'>
                <div className='contentTop'>
                    <div className='pageTitle'>
                        <div>{option.pageTitle}</div>
                    </div>
                    <div className='searchContainer'>
                        <select onChange={selectOption}>
                            <option value='none'>{optionValue.default}</option>
                            <option value='title'
                                    name='option'>{optionValue.title}</option>
                            <option value='body'
                                    name='option'>{optionValue.body}</option>
                            <option value='all'
                                    name='option'>{optionValue.all}</option>
                        </select>
                        <input placeholder='검색어를 입력하세요'
                               type='text'
                               name='text'
                               onChange={keywordInput}/>
                        <button type='submit'
                                onClick={clickSearch}>검색</button>
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
                                <Link href={{pathname : `/`}}>
                                    {data.title}
                                </Link>
                            </td>
                            <td>{data.userId}</td>
                            <td><a>2021.08.18</a></td>
                        </tr>
                    ))}
                    {/**/}
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
                </div>
            </div>
        </div>
    )
};


export default Main;