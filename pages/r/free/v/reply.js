import React from "react";
import Comment from "./comment";


const Reply = (props) => {
    console.log(props)
    return (
        <div className='commentReply'>
            {props.reply_comment.map(data => (
                <div key={data.id}>
                    <Comment detailState={props.detailState}
                             comment={props.comment}
                             user_name={data.user_name}
                             text={data.text}
                             replyComment={props.replyComment}
                             clickReplyingSubmit={props.clickReplyingSubmit}
                             typingComment={props.typingComment}/>
                </div>
            ))}
        </div>
    )
};
export default Reply;