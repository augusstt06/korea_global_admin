import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';

import Side from '../../../component/Side'

const Market = () => {
    const [marketApi, setMarketApi] = useState([]);

    const marketData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
        setMarketApi(res.data)
    }
    useEffect(() => {
        marketData();
    }, [])

    const [optionInput, setOptionInput] = useState({
        keyword : '',
        option : ''
    })
    console.log(optionInput)
    const searchInput = (e) =>{
        const newInput = {...optionInput}
        newInput[e.target.name] = e.target.value
        setOptionInput(newInput)
    }
    const checkOption = (e) => {
        const optional = e.target.value
        setOptionInput({option : optional})
    }

    const titleData = marketApi.map(data => data.title)
    const bodyData = marketApi.map(data => data.body)

    const [search, setSearch] = useState([])
    const findData = () => {
            if(optionInput.option === 'title') {
                setSearch()
                const copy = []
                const searchData = titleData.filter(data => data.match(optionInput.keyword))
                searchData.forEach(parents => 
                    marketApi.forEach(childs => {        
                        if((childs.title).includes(parents) === true){
                            copy.push(childs)
                        } 
                    }))
                return setSearch(copy)
            } else if(optionInput.option === 'body') {
                setSearch()
                const copy = []
                const searchData = bodyData.filter(data => data.match(optionInput.keyword))
                searchData.forEach(parents => 
                    marketApi.forEach(childs => {
                        if ((childs.body).includes(parents) === true){
                            copy.push(childs)
                        }
                    }))
                return setSearch(copy)
            } else {
                return freeApi
            }   
    }
    const clickSearch = () => {    
        findData()
    }
    
    return (
        <div className='market'>
            <div className='component'>
                <Side items = {[
                    {id : 1, link : '/board/free', text : '자유게시판'},
                    {id : 2, link : '/board/study', text : '스터디게시판'}
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
                                        <Link href = {{pathname : `/board/${market.id}`, query : {category : 'market'}}}>
                                            <a>{market.id}</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href = {{pathname : `/board/${market.id}`, query : {category : 'market'}}}>
                                            <a>{market.title}</a>
                                        </Link>
                                    </td>
                                    <td>xx.xxx.xxx</td>
                                </tr>
                            )) : search.map(search => (
                                <tr className='contentBody' key = {search.id}>
                                    <td>xxx</td>
                                    <td>
                                        <Link href = {{pathname : `/board/${search.id}`, query : {category : 'market'}}}>
                                            <a>{search.id}</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href = {{pathname : `/board/${search.id}`, query : {category : 'market'}}}>
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
                    <Link href ={{pathname : `/board/write`, query : {category :'market'}}}>
                        글 작성
                    </Link>
                </div>
            </div>
            <style jsx>{`
            
            .market{
                display: flex;
                position :relative;
            }
            .component {
                margin-left : 20px;
                height : 150px;
                margin-right : 20px;
                /* background : gray; */
                position: relative;
                top : 120px
            }
            
            table{
                width :  1000px;
            }
            .contentBox {
                table-layout : fixed;
                /* width : 750px */
                border-top : 1px solid black;
                /* border-bottom : 1px solid black; */
                padding : 10px 5px;
                
            }
            tr {
                padding: 10px;
            }
            
            td {
                padding: 10px;
                text-align : center;
                border-bottom : 1px dotted black;
            }
            .write {
                position: relative;
                float : right;
                right : 7px;
                border : 1px solid black;
                width : 60px;
                text-align : center;
                padding: 5px;
            }
            .write:hover {
                background: black;
                color : white;
            }
            .search {
                position: relative;
                /* left : 950px; */
                
            }
            .inputText {
                margin-right : 10px;
                margin-left : 10px;
            }
            `}
        </style>
        </div>
    )
}

export default Market
