import React from "react";
import Link from 'next/dist/client/link';
import axios from "axios";

import Side from "../../../component/Side";

const Comment = () => {
    return(
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : 4, link : `/info/post`, text : '내가 쓴 글'},
                    {id : 6, link : `/info/message`, text : '쪽지함'}
                ]} title = '내 정보' />
            </div>
            <div className='content'>
                <div className='name_container_solo'>
                    <div className='name_tag_solo'>
                        <div>댓글 단 글</div>
                    </div>
                </div>
                <div className='search'>
                    <select className='option'>
                        <option>선택</option>
                        <option>제목</option>
                        <option>내용</option>
                        <option>제목 + 내용</option>
                    </select>
                    <input type= 'text'
                           className='inputText'/>
                    <button type='submit'
                            className='button'>검색</button>
                </div>
                <div className='contentBox_info'>
                    <table className='infoTable'>
                        <thead>
                            <tr className='contentHeader'>
                                <th>작성자</th>
                                <th>제목</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            <tr className='contentBody'>
                                <td>
                                    <a>데이터/작성자</a>
                                </td>
                                <td>
                                    <a>데이터가 들어갈 곳/제목</a>
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
export default Comment;