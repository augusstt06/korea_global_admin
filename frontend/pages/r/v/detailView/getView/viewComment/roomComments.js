import React, {useState} from "react";
import {useRouter} from "next/router";
import {FiSend} from "react-icons/fi";
import {BiCommentAdd} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";

export const RoomComment = (props) => {
    const [replyBtn, setReplyBtn] = useState(false);
    const clickReply = () => {
        setReplyBtn(!replyBtn);
    };
    console.log("댓글부분",props);
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
                <div>
                    {/*<a onClick={() => props.deleteComment()}>*/}
                        <AiFillDelete size = "15"/>
                    {/*</a>*/}
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

export const RoomReply = (props) => {
    console.log("대댓글", props)
    const router = useRouter();
    console.log(router.query)
    return (
        <div className='commentReply'>
            {props.commentsReplies.map(data => (
                <div key={data.boardId}>
                    <RoomReplyComment username      = {data.username}
                                      deleteComment = {props.deleteComment}
                                      commentId     = {data.commentId}
                                      text          = {data.text}/>
                </div>
            ))}
        </div>
    )
};

export const RoomReplyComment = (props) => {
    console.log("리플",props)
    // 삭제 => 보드 아이디(글 번호), 코멘트 아이디(무슨 댓글), 리플 아이디(무슨 대댓글), 페이지
    //        라우터.보드 아디    props.commentId,
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
                    {/*<a onClick={props.deleteComment()}>*/}
                        <AiFillDelete size="13"/>
                    {/*</a>*/}
                </div>
            </div>
        </div>
    )
};