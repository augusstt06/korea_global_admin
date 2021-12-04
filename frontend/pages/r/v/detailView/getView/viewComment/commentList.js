import React from "react";
import {Comment, Reply} from "./comments";

const CommentList = (props) => {
    return (
        <div className='commentList'>
            {props.ssrData.map(data => data.boardsComments.map(data2 => (
                <div key={data2.id}>
                    <Comment ssrData={props.ssrData}
                             comment={props.comment}
                             username={data2.username}
                             text={data2.text}
                             c_id={data2.boardId}
                             replyComment={props.replyComment}
                             clickReplyingSubmit={props.clickReplyingSubmit}
                             typingComment={props.typingComment}/>
                    <Reply ssrData={props.ssrData}
                           commment={props.comment}
                           replyComment={props.replyComment}
                           clickReplyingSubmit={props.clickReplyingSubmit}
                           typingComment={props.typingComment}
                           commentsReplies={data2.commentsReplies}
                           commentId={data2.boardId}/>
                </div>
            )) )}
        </div>
    )
};
export default CommentList;