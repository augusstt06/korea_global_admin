import React from "react";
import Link from 'next/dist/client/link';
import axios from "axios";

import Side from "../../../component/Side";

const Comment = () => {
    return(
        <div className='comment'>
            <div className='component'>
                <Side items = {[
                    {id : 4, link : `/info/post`, text : '내가 쓴 글'},
                    {id : 6, link : `/`, text : '쪽지함'}
                ]} title = '내 정보' />
            </div>
            <div className='content'>
                <div>댓글 단 글</div>
                <table className='infoComment'>
                    <thead>
                        <tr className='commentHeader'>
                            <td>작성자</td>
                            <td>제목</td>
                            <td>날짜</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        <tr className='commentBody'>
                            <td>데이터/작성자</td>
                            <td>데이터가 들어갈 곳/제목</td>
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