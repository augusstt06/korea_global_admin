import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';

import Side from '../../../component/Side'

// 여기 api url === /board/{category === market}

const Market = () => {
    const [marketApi, setMarketApi] = useState([]);

    const marketData = async() => {
        const res = await axios.get('/api/board/market');
        setMarketApi(res.data)
    }
    useEffect(() => {
        marketData();
    }, [])

    const [optionInput, setOptionInput] = useState({
        keyword : '',
        option  : ''
    })
    const searchInput = (e) =>{
        const newInput          = {...optionInput}
        newInput[e.target.name] = e.target.value
        setOptionInput(newInput)
    }
    const checkOption = (e) => {
        const optional = e.target.value
        setOptionInput({option : optional})
    }

    const titleData = marketApi.map(data => data.title)
    const bodyData  = marketApi.map(data => data.body)

    const [search, setSearch] = useState([]);

    const findData = () => {
      switch(optionInput.option) {
        case "title" :
          setSearch();
          const correctTitleData = marketApi.filter(data => (data.title).includes(optionInput.keyword) === true);
          setSearch(correctTitleData);
          break;
        case "body" :
          setSearch();
          const correctBodyData = marketApi.filter(data => (data.body).includes(optionInput.keyword) === true);
          setSearch(correctBodyData);
          break
        default :
          marketApi;
          break;
      }
    };
    const clickSearch = () => {
        findData()
    };
    return (
        <div className='market'>
          <div className='component'>
            <Side items = {[
                {id : 1, link : '/board/free', text : '자유게시판'},
                {id : 3, link : '/board/study', text : '스터디게시판'}
            ]} title = '게시판' />
          </div>
          <div className='content'>
            <h1>장터 게시판</h1>
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
                  search.length === 0 ? marketApi.map(market => (
                  <tr className='contentBody' key = {market.id}>
                    <td>xxx</td>
                    <td>
                      <Link href = {{pathname : `/board/${market.id}`, query : {category : '2'}}}>
                          <a>{market.id}</a>
                      </Link>
                    </td>
                    <td>
                      <Link href = {{pathname : `/board/${market.id}`, query : {category : '2'}}}>
                          <a>{market.title}</a>
                      </Link>
                    </td>
                    <td>xx.xxx.xxx</td>
                  </tr>
                  )) : search.map(search => (
                  <tr className='contentBody' key = {search.id}>
                    <td>xxx</td>
                    <td>
                      <Link href = {{pathname : `/board/${search.id}`, query : {category : '2'}}}>
                          <a>{search.id}</a>
                      </Link>
                    </td>
                    <td>
                      <Link href = {{pathname : `/board/${search.id}`, query : {category : '2'}}}>
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
              <Link href ={{pathname : `/board/write`, query : {category :'2'}}}>
                  글 작성
              </Link>
            </div>
          </div>
        </div>
    )
}

export default Market
