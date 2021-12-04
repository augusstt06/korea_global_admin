import React, {useState} from "react";
import {FiSend} from "react-icons/fi";
import {BiCommentAdd} from "react-icons/bi";

export const Comment = (props) => {
    // 댓글
    const [replyBtn, setReplyBtn] = useState(false);
    const clickReply = () => {
        setReplyBtn(!replyBtn);
    };
    return (
        <div className='commentList'>
            <div className='commentBox'>
                <div className='commentId'>
                    <a>{props.username}</a>
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

export const Reply = (props) => {
    // 대댓글
    return (
        <div className='commentReply'>
            {props.commentsReplies.map(data => (
                <div key={data.boardId}>
                    <ReplyComment ssrData={props.ssrData}
                                  comment={props.comment}
                                  username={data.username}
                                  text={data.text}/>
                </div>
            ))}
        </div>
    )
};

export const ReplyComment = (props) => {
    // 대댓글 안의 입력 없는 댓글
    return (
        <div className='commentList'>
            <div className='commentBox'>
                <div className='commentId'>
                    <a>{props.username}</a>
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