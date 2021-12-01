import React from "react";
import CommentSingle from "./single/commentSingle";
import Reply from "./reply/reply";


const CommentList = (props) => {
    return (
        <div className='commentList'>
            {props.detailState.detail.map(data => data.board_comment.map(data2 => (
                <div key={data2.id}>
                    <CommentSingle detailState={props.detailState}
                                    comment={props.comment}
                                    user_name={data2.user_name}
                                    text={data2.text}
                                    c_id={data2.id}
                                    replyComment={props.replyComment}
                                    clickReplyingSubmit={props.clickReplyingSubmit}
                                    typingComment={props.typingComment}/>
                    <Reply detailState={props.detailState}
                           commment={props.comment}
                           replyComment={props.replyComment}
                           clickReplyingSubmit={props.clickReplyingSubmit}
                           typingComment={props.typingComment}
                           reply_comment={data2.comment_reply}
                           commentId={data2.id}/>
                </div>
            )))}
        </div>
    )
};
export default CommentList;