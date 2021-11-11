import React from "react";
import axios from "axios";
import Link from "next/dist/client/link";

import Side from "../../component/Side";
// 마이 페이지 default -> 내가 쓴 글, 내가 단 댓글//내 아이디 변경 이거는 사이드바로 뱬다
const Info = () => {
    return(
        <div className="main">
            <div className='component'>
                <Side items = {[
                    //여기에 내가 쓴 글, 내가 댓글 단 글, 쪽지함
                    {id : 4, link : `/info/post`, text : '내가 쓴 글'},
                    {id : 5, link : `/info/comment`, text : '댓글 단 글'},
                    {id : 6, link : `/info/message`, text : '쪽지함'}
                ]} title = '내 정보' />
            </div>
            <div className='content'>
                <div className='name_container'>
                    <div className='name_tag'>내 정보</div>
                </div>
                <table className='infoTable'>
                    <thead>
                        <tr className='infoHeader'>

                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default Info;