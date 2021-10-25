import React,{useState, useEffect} from 'react'
import Link from 'next/dist/client/link'
import axios from 'axios'

import Side from '../../../component/Side'

const Free = () => {
    const [freeApi, setFreefreeApi] = useState([]);

    const freeData = async() => {
        console.log('Now Loading...');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
        setFreefreeApi(res.data);
        console.log('Finish Loading');
    }
    useEffect(() => {
        freeData();
    }, []);
    // 여긴 option serach
    const [optionInput, setOptionInput] = useState({
        keyword : '',
        option : ''
    });
    const searchInput = (e) =>{
        // input 입력값
        const newInput = {...optionInput}
        newInput[e.target.name] = e.target.value
        setOptionInput(newInput)
    };
    const checkOption = (e) => {
        // optional 선택값
        const optional = e.target.value
        console.log(optional)
        setOptionInput({option : optional})
    };
    const [search, setSearch] = useState([]);

    const clickSearch = () => {
        findData()
    };
    const findData = () => {
      switch(optionInput.option) {
        case "title" :
          setSearch();
          const correctTitleData = freeApi.filter(data => (data.title).includes(optionInput.keyword) === true);
          setSearch(correctTitleData);
          break;
        case "body" :
          setSearch();
          const correctBodyData = freeApi.filter(data => (data.body).includes(optionInput.keyword) === true);
          setSearch(correctBodyData);
          break;
        default :
          freeApi;
          break;
      }
    };
    return (

        <div className='free'>
          <div className='component'>
              <Side items = {[
                          {id : 2, link : '/board/study', text : '스터디 게시판'},
                          {id : 3, link : '/board/market', text : '장터 게시판'}
                      ]} title = '게시판'/>
          </div>
          <div className='content'>
            <h1>자유 게시판</h1>
            <div className='search'>
                <select  onChange={checkOption} className='option'>
                    <option value = 'none' >선택</option>
                    <option value = 'title'>제목</option>
                    <option value = 'body'>내용</option>
                </select>
                <input type = 'text'
                        name = 'keyword'
                        onChange={searchInput}
                        className='inputText'/>
                <button type = 'submit'
                        onClick={clickSearch}
                        className='button'
                        >검색</button>
            </div>
            <div className='contentBox'>
              <table className='table'>
                <thead>
                  <tr className='contentHeader'>
                    <th>번호</th>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>날짜</th>
                  </tr>
                </thead>
                <tbody>
                {
                search.length === 0 ? freeApi.map(free => (
                <tr className='contentBody' key = {free.id}>
                  <td>xxx</td>
                  <td>
                    <Link href = {{pathname : `/board/${free.id}`, query : {category : 'free'}}}>
                        <a>{free.id}</a>
                    </Link>
                  </td>
                  <td>
                    <Link href = {{pathname : `/board/${free.id}`, query : {category : 'free'}}}>
                        <a>{free.title}</a>
                    </Link>
                  </td>
                  <td>xx.xxx.xxx</td>
                </tr>
                )) : search.map(search => (
                <tr className='contentBody' key = {search.id}>
                  <td>xxx</td>
                  <td>
                    <Link href = {{pathname : `/board/${search.id}`, query : {category : 'free'}}}>
                        <a>{search.id}</a>
                    </Link>
                  </td>
                  <td>
                    <Link href = {{pathname : `/board/${search.id}`, query : {category : 'free'}}}>
                        <a>{search.title}</a>
                    </Link>
                  </td>
                  <td>xx.xxx.xxx</td>
                </tr>
                    ))
                }
                </tbody>
              </table>
            </div>
            <div className='write'>
              <Link href ={{pathname : `/board/write`, query : {category :'free'}}}>
                  <a>글 작성</a>
              </Link>
            </div>
          </div>
        </div>

    )
}

export default Free
