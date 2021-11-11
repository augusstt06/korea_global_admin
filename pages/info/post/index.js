import React from "react";
import axios from "axios";
import Link from 'next/link';

import Side from "../../../component/Side";

const Post = () => {
  return (
    <div className= 'main'>
      <div className='component'>
        <Side items = {[
            {id : 5, link : `/info/comment`, text : '댓글 단 글'},
            {id : 6, link : `/info/message`, text : "쪽지함"}
        ]} title = "내 정보" />
      </div>
      <div className='content'>
        <div className= "name_container_solo">
          <div className='name_tag_solo'>
            <div>내가 쓴 게시물</div>
          </div>
        </div>
        <div className='search'>
          <select className='option' name="option" >
              <option value = 'none'>선택</option>
              <option value = 'title'>제목</option>
              <option value = 'body'>내용</option>
              <option value = 'body'>제목 + 내용</option>
          </select>
          <input type = 'text'
                 name = 'keyword'
                 className='inputText'/>
          <button type = 'submit'
                  className='button'
                  >검색</button>
        </div>
        <div className = 'contentBox_info'>
          <table className='infoTable'>
            <thead>
              <tr className='contentHeader'>
                <th>번호</th>
                <th>제목</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
            {
                  <tr className ='contentBody'>
                    <td>
                        <a>데이터/번호</a>
                    </td>
                    <td>
                        <a>제목 데이터가 들어갈 곳</a>
                    </td>
                    <td>
                        <a>데이터/날짜</a>
                    </td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
        <div className='back'>
          <button className='backButton'>
              <Link href = {{pathname : `/info`}}>
                  목록으로
              </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post;