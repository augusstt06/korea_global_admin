import React from "react";
import Link from 'next/dist/client/link';
import axios from "axios";

import Side from "../../../component/Side";
//작성글 페이지
const Post = () => {
    return(
        <div className='post'>
            <div className='component'>
                <Side items = {[
                    {id : 5, link : `/info/`, text : '댓글 단 글'},
                    {id : 6, link : `/info/`, text : '쪽지함'}
                ]} title = "내 정보"/>
            </div>
            <div className='content'>
                <div>내가 쓴 글</div>
                <table className='infoPost'>
                    <thead>
                        <tr className='postHeader'>
                            <th>제목</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        <tr className='postBody'>
                            <td>나중에 데이터로 채울 곳/제목</td>
                            <td>데이터/날짜</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
            <div className='back'>
                <button>
                    <Link href = {{pathname : `/info`}}>
                        목록으로
                    </Link>
                </button>
            </div>
        </div>
    )

}