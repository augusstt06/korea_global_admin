import React, {useState} from "react";
import {FiSend} from "react-icons/fi";
import {BiCommentAdd} from "react-icons/bi";

const CommentSingle = (props) => {
    const [replyBtn, setReplyBtn] = useState(false);
    const clickReply = () => {
        setReplyBtn(!replyBtn);
    };
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
                    <a onClick={() => clickReply()}>
                        <BiCommentAdd size='15'/>
                    </a>
                </div>
            </div>
            {replyBtn === true ?
            <div className='reply'>
                <textarea placeholder='댓글을 입력하세요'
                          onChange={props.typingComment}
                          name='reply'/>
                <button onClick={() => {props.clickReplyingSubmit(props.c_id)}}>
                    <FiSend size='15'/>
                </button>
            </div> : <></>}
        </div>
    )
};
export default CommentSingle;