import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Link from 'next/link'

import Side from "../component/Side"

import Pagination from "../component/Pagination"

export default function Home() {
  const [mainApi, setMainApi] = useState({
      mainAnnonce : [],
      mainBoard : []
  })
  const mainData = async() => {
      console.log('Now Loading...');
      const resAnnounce = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=30');
      const resBoard =  await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=30');
      setMainApi({mainAnnonce : resAnnounce.data, 
                  mainBoard : resBoard.data});
      console.log("Finish Loading");
  }
  useEffect(() => {
    mainData();
  },[])

  const [optionInput, setOptionInput] = useState({
    category : '',
    option : '',
    keyword : ''
  })
  // const [optionInput, setOptionInput] = useState([])
  const searchInput = (e) => {
    const newInput = {...optionInput};
    newInput[e.target.name] = e.target.value;
    setOptionInput(newInput)
  }
  const checkOption = (e) => {
    const optional = {...optionInput};
    optional[e.target.name] = e.target.value;
    setOptionInput(optional)
    
  }
  const checkCategory = (e) => {
    const category = {...optionInput};
    category[e.target.name] = e.target.value;
    setOptionInput(category)
  }
  console.log(optionInput.category)


  const [searchAnnounce, setSearchAnnounce] = useState([]);
  const [searchBoard, setSearchBoard] = useState([]);
  console.log(mainApi)

  // 나중에 함수 분리하기
  const findData = () => {
    if (optionInput.category === "announce" && optionInput.option === "title") {
      setSearchAnnounce();
      const copy = [];
      const searchData = (mainApi.mainAnnonce.map(data => data.title)).filter(data => data.match(optionInput.keyword));
      searchData.forEach(parents => 
        (mainApi.mainAnnonce).forEach(childs => {
          if ((childs.title).includes(parents) === true) {
            copy.push(childs);
          }
        }))
    return setSearchAnnounce(copy)
    } else if (optionInput.category === "announce" && optionInput.option === "body"){
        setSearchAnnounce();
        const copy = [];
        const searchData = (mainApi.mainAnnonce.map(data => data.body)).filter(data => data.match(optionInput.keyword));
        searchData.forEach(parents => 
          (mainApi.mainAnnonce).forEach(childs => {
            if ((childs.body).includes(parents) === true) {
              copy.push(childs);
            }
          }))
      return setSearchAnnounce(copy)
    } else if (optionInput.category === "board" && optionInput.option === "title"){
        setSearchBoard();
        const copy = [];
        const searchData = (mainApi.mainBoard.map(data => data.title)).filter(data => data.match(optionInput.keyword));
        searchData.forEach(parents => 
          (mainApi.mainBoard).forEach(childs => {
            if ((childs.title).includes(parents) === true) {
              copy.push(childs);
            }
          }))
      return setSearchBoard(copy)
    } else if (optionInput.category === "board" && optionInput.option === "body"){
        setSearchBoard();
        const copy = [];
        const searchData = (mainApi.mainBoard.map(data => data.body)).filter(data => data.map(optionInput.keyword));
        searchData.forEach(parents => 
          (mainApi.mainBoard).forEach(childs => {
            if ((childs.body).includes(parents) === true) {
              copy.push(childs);
            }
          }))
      return setSearchBoard(copy)
    } else {
        return mainApi;
    }
  }
  const clickSearch = () => {
    findData();
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = ( searchAnnounce.length === 0 ? mainApi.mainAnnonce.slice(indexOfFirstPost, indexOfLastPost) : 
                                                      searchAnnounce.slice(indexOfFirstPost, indexOfLastPost));

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className= 'main'>
      <div className='component'>
        <Side items = {[
          {id : 1, link : '/board/free', text : '자유게시판'}
        ]}/>
      </div>
      <div className='content'>
        <h1>으아앙</h1>
        <div className='search'> 
          <select className='option' name = "category" onChange = {checkCategory}>
              <option value = 'none' >선택</option>
              <option value = 'announce'>공지</option>
              <option value = 'board'>게시판</option>
          </select>
          <select className='option' name="option" onChange = {checkOption}>
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
        <div className = 'contentBox'>
          <table className='announcetable'>
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
                currentPost.map(announce => (
                  <tr className ='contentBody' key = {announce.id}>
                    <td>xx</td>
                    <td>
                      <Link href = {{pathname : `/office/announce/${announce.id}`}}>
                        <a>{announce.id}</a>
                      </Link>
                    </td>
                    <td>
                      <Link href = {{pathname : `/office/announce/${announce.id}`}}>
                        <a>{announce.title}</a>
                      </Link>
                    </td>
                    <td>xx.xxx.xxx</td>
                  </tr> 
                ))
              }
            </tbody>
          </table>
          <div>
            <Pagination postsperPage={postPerPage} totalPage={(searchAnnounce.length === 0 ? mainApi.mainAnnonce.length : searchAnnounce.length)} paginate={paginate} />
          </div>
        </div>
      </div>
    </div>
  )
}
