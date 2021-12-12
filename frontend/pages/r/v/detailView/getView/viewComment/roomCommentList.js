import React from "react";
import {RoomComment, RoomReply} from "./roomComments";

const RoomCommentList = (props) => {
    {/*여기 c_id가 다른값이 들어와야 하는데 지금 같은 값이 들어옴*/}
    console.log(props)
    // 지금 Mapping key 값도 text인데 나중에 ID값으로 바꾸기
    return (
        <div className='commentList'>
            {props.ssrData.map(data => data.boardsComments.map(data2 => (
                <div key={data2.text}>
                    <RoomComment ssrData             = {props.ssrData}
                                 username            = {data2.username}
                                 text                = {data2.text}
                                 c_id                = {data2.boardId}
                                 replyComment        = {props.replyComment}
                                 clickReplyingSubmit = {props.clickReplyingSubmit}
                                 typingComment       = {props.typingComment}/>
                    <RoomReply ssrData           = {props.ssrData}
                               replyComment        = {props.replyComment}
                               clickReplyingSubmit = {props.clickReplyingSubmit}
                               typingComment       = {props.typingComment}
                               commentsReplies     = {data2.commentsReplies}
                               commentId           = {data2.boardId}/>
                </div>
            )) )}
        </div>
    )
};
export default RoomCommentList;