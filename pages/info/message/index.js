import React from "react";
import Link from 'next/dist/client/link';
import axios from 'axios';

import Side from "../../../component/Side";
import { HiMail } from 'react-icons/Hi';
import { HiMailOpen } from 'react-icons/Hi';

const Message = () => {
    return(
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : 4, link : `/info/post`, text : '내가 쓴 글'},
                    {id : 5, link : `/info/comment`, text : '댓글 단 글'}
                ]} title = '내 정보'/>
            </div>
            <div className='content'>
                <div className='name_container_solo'>
                    <div className='name_tag_solo'>
                        <div>쪽지함</div>
                    </div>
                </div>
                <div className='messageList'>
                    {/*<ul className='list_category'>*/}
                    {/*    <li><a>편지 아이콘</a></li>*/}
                    {/*    <li><a>내용</a></li>*/}
                    {/*    <li><a>시간</a></li>*/}
                    {/*</ul>*/}
                    {
                        <ul className='each_message'>
                            {/*여기 하나하나에 공간 만들고, 링크 붙이고, 시간 체크, */}
                            <li>
                                <div><HiMail/></div>
                                <div>
                                    <Link href = {{pathname : `/info/message/private`}}>
                                        가장 최근에 보낸/받은 메시지
                                    </Link>
                                </div>
                                <div>시간</div>
                            </li>
                            <li>
                                <div><HiMail/></div>
                                <div>
                                    {/*여기서 params로 정보 보내기*/}
                                    <Link href = {{pathname : `/info/message/private`}}>
                                        가장 최근에 보낸/받은 메시지
                                    </Link>
                                </div>
                                <div>시간</div>
                            </li>
                            <li>
                                <div><HiMail/></div>
                                <div>
                                    <Link href = {{pathname : `/info/message/private`}}>
                                        가장 최근에 보낸/받은 메시지
                                    </Link>
                                </div>
                                <div>시간</div>
                            </li>
                        </ul>
                    }
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

export default Message;