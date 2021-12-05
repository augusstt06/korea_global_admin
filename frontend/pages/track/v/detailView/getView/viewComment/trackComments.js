import React, {useState} from "react";
import {FiSend} from "react-icons/fi";
import {BiCommentAdd} from "react-icons/bi";

export const TrackComment = (props) => {
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
export const TrackReply = (props) => {
    return (
        <div className='commentReply'>
            {props.commentsReplies.map(data => (
                <div key={data.boardId}>
                    <TrackReplyComment ssrData  = {props.ssrData}
                                       comment  = {props.comment}
                                       username = {data.username}
                                       text     = {data.text}/>
                </div>
            ))}
        </div>
    )
};
export const TrackReplyComment = (props) => {
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
}