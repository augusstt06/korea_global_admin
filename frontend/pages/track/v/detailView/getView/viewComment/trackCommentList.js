import React from "react";
import {TrackComment, TrackReply} from "./trackComments";

const TrackCommentList = (props) => {
    console.log("리스트",props)
    return (
        <div className='commentList'>
            {props.ssrData.map(data => data.boardsComments.map(data2 => (
                <div key={data2.id}>
                    <TrackComment ssrData             = {props.ssrData}
                                  username            = {data2.username}
                                  text                = {data2.text}
                                  c_id                = {data2.boardId}
                                  replyComment        = {props.replyComment}
                                  clickReplyingSubmit = {props.clickReplyingSubmit}
                                  typingComment       = {props.typingComment}/>
                    <TrackReply ssrData            = {props.ssrData}
                                clickReplyingSubmit = {props.clickReplyingSubmit}
                                typingComment       = {props.typingComment}
                                commentsReplies     = {data2.commentsReplies}/>

                </div>
            )))}
        </div>
    )
};
export default TrackCommentList;