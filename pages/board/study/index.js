import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import axios from 'axios';

import Side from '../../../component/Side'

const Study = () => {
    const [studyApi, setStudyApi] = useState([]);

    const StudyData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
        setStudyApi(res.data)
    }
    useEffect(() => {
        StudyData();
    }, [])

    const [optionInput, setOptionInput] = useState({
        keyword : '',
        option  : ''
    })
    const searchInput = (e) => {
        const newInput          = {...optionInput}
        newInput[e.target.name] = e.target.value
        setOptionInput(newInput)
    }
    const checkOption = (e) => {
        const optional = e.target.value
        setOptionInput({option : optional})
    }
    const [search, setSearch] = useState([]);

    const findData = () => {
      switch(optionInput.option) {
        case "title" :
          setSearch();
          const correctTitleData = studyApi.filter(data => (data.title).includes(optionInput.keyword) === true);
          setSearch(correctTitleData);
          break;
        case "body" :
          setSearch();
          const correctBodyData = studyApi.filter(data => (data.body).includes(optionInput.keyword) === true);
          setSearch(correctBodyData);
          break;
        default :
          studyApi;
          break;
      }
    };
    const clickSearch = () => {
        findData()
    }
    return (
      <div className = 'study'>
        <div className='component'>
          <Side items = {[
              {id : 1, link : '/board/free', text : '자유게시판'},
              {id : 3, link : '/board/market', text : '장터게시판'}
          ]} title = '게시판' />
        </div>
        <div className='content'>
          <h1>스터디 게시판.</h1>
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
                    search.length === 0 ? studyApi.map(study => (
                    <tr className='contentBody' key = {study.id}>
                      <td>xxx</td>
                      <td>
                        <Link href = {{pathname : `/board/${study.id}`, query : {category : 'study'}}}>
                            <a>{study.id}</a>
                        </Link>
                      </td>
                      <td>
                        <Link href = {{pathname : `/board/${study.id}`, query : {category : 'study'}}}>
                            <a>{study.title}</a>
                        </Link>
                      </td>
                      <td>xx.xxx.xxx</td>
                    </tr>
                    )) : search.map(search => (
                    <tr className='contentBody' key = {search.id}>
                      <td>xxx</td>
                      <td>
                        <Link href = {{pathname : `/board/${search.id}`, query : {category : 'study'}}}>
                            <a>{search.id}</a>
                        </Link>
                      </td>
                      <td>
                        <Link href = {{pathname : `/board/${search.id}`, query : {category : 'study'}}}>
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
            <Link href ={{pathname : `/board/write`, query : {category :'study'}}}>
                <a>글 작성</a>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Study
