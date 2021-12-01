import React, {useState} from "react";
import {BsArrowReturnRight} from "react-icons/bs";
import {FiSend} from "react-icons/fi";

const Comment = (props) => {
    const [replyBtn, setReplyBtn] = useState(false);
    const clickReply = () => {
        setReplyBtn(!replyBtn);
    };
    console.log(props)
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
                        대댓글
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
export default Comment;