import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Side from "../component/Side";
import axios from "axios";

// Flexible 하게
const Main = () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // 필요 기능 : Get API Connect => Response Data Mapping => Rendering
    //           Mapping Data => Search : Done!
    //           Pagination : Done!

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
    const mainApi = async() => {
        console.log('Now Loading...');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setMain(res.data);
        setSearch(res.data);
        console.log('Finish Loading!');
    };
    useEffect(() => {
        mainApi();
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
        const titleData = main.filter(data => (data.title).includes(keyword) === true);
        setSearch(titleData);
    };
    const searchBodyData = () => {
        setSearch();
        const bodyData = main.filter(data => (data.body).includes(keyword) === true);
        setSearch(bodyData);
    };
    const searchAllData = () => {
        setSearch();
        const allData = main.filter(data => (data.title).includes(keyword) === true || (data.body).includes(keyword) === true);
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
}
export default Main;