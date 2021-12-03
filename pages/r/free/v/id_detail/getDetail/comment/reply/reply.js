import React from "react";
import CommentReply from "./commentReply";

const Reply = (props) => {
    return (
        <div className='commentReply'>
            {props.reply_comment.map(data => (
                <div key={data.id}>
                    <CommentReply preData={props.preData}
                                  comment={props.comment}
                                  user_name={data.user_name}
                                  text={data.text}/>
                </div>
            ))}
        </div>
    )
};
export default Reply;