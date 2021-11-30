import React, {useState} from "react";
import {BsArrowReturnLeft} from "react-icons/bs";
import {FiSend} from "react-icons/fi";

export const Comment_free = (props) => {
    console.log(props)
    const [clickC, setClickC] = useState(false);

    return (
        <>
            {props.commentData.map(data => data.board_comment.map(data2 => (
            // <div className='commentList' key={data2.id}>
            <>
                <div className='commentBox'>
                    <div className='commentId'>
                        <a>{data2.user_name}</a>
                    </div>
                    <div className='comment'>
                        <a>{data2.text}</a>
                        <a>{data2.id}</a>
                    </div>
                    <div className='recomment'>
                        <BsArrowReturnLeft onClick={() => {props.clickState.setClickReply(!props.clickState.clickReply)}}/>
                    </div>
                </div>
                {/*{clickC ?*/}
                {/*<div className='reply'>*/}
                {/*    <textarea placeholder='댓글을 입력하세요'*/}
                {/*              onChange={props.typingComment}*/}
                {/*              name='reply'/>*/}
                {/*    <button onClick={props.clickReplyingSubmit}>*/}
                {/*        <FiSend size='15'/>*/}
                {/*    </button>*/}
                {/*</div> : <></>}*/}
            </>)))}
            {/*</div>)))}*/}
        </>
    )
};

export const ReplyArea = (props) => {
    return (
        <>
            {props.clickState.clickReply ?
            <div className='reply'>
                <textarea placeholder='대댓글을 입력하세요'
                          onChange={props.typingComment}
                          name='reply'/>
                <button onClick={props.clickReplyingSubmit}>
                    <FiSend size='15'/>
                </button>
            </div> : <></>}
        </>
    )
}

