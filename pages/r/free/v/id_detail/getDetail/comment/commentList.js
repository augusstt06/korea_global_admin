import React from "react";
import CommentSingle from "./single/commentSingle";
import Reply from "./reply/reply";


const CommentList = (props) => {
    // props 필요없는 것 합치거나 삭제하기
    return (
        <div className='commentList'>
            {props.preData.map(data => data.board_comment.map(data2 => (
                <div key={data2.id}>
                    <CommentSingle preData={props.preData}
                                    comment={props.comment}
                                    user_name={data2.user_name}
                                    text={data2.text}
                                    c_id={data2.id}
                                    replyComment={props.replyComment}
                                    clickReplyingSubmit={props.clickReplyingSubmit}
                                    typingComment={props.typingComment}/>

                    <Reply preData={props.preData}
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