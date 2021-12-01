import React from "react";

const CommentReply = (props) => {
    return (
        <div className='commentList'>
            <div className='commentBox'>
                <div className='commentId'>
                    <a>{props.user_name}</a>
                    <a>{props.commentId}</a>
                </div>
                <div className='comment'>
                    <a>{props.text}</a>
                </div>
                <div className='recomment'>
                </div>
            </div>
        </div>
    )
};
export default CommentReply;
