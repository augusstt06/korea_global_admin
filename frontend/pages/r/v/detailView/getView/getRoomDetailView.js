import React, {useState} from "react";
import Link from "next/link";
import axios from "axios";
import { FiSend } from 'react-icons/fi';
import RoomCommentList from "./viewComment/roomCommentList";
import {getCookie} from "../../../../../Cookie/HandleCookie";


const GetRoomDetailView = (props) => {
    // Basic Section
    const [comment, setComment] = useState({
        comment : '',
        reply : ''
    });
    const board_id = props.ssrData[0].id;
    const pages = props.router.query.pages

    const typingComment = (e) => {
        const newInput = {...comment};
        newInput[e.target.name] = e.target.value;
        setComment(newInput);
    };

    const removeSpace = (string) => {
        const word = string.replace(/ /g, "");
        return word.length;
    };

    // // API Request Section
    //  POST (Comment_single)
    const postComment = () => {
        axios.post(`http://localhost:8000/r/v?board_id=${board_id}&pages=${pages}`, {
            "text": comment.comment
        },{
            headers :{
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
        }).then(r => {
            console.log(r);
            alert('작성 완료!');
            window.location.reload();
        }).catch((e) => {
            console.log(e);
        })
    };
    const clickCommentSubmit = () => {
        if(removeSpace(comment.comment)){
            postComment();
        } else {
            alert('내용을 입력해 주세요');
        }
    };

    // POST (Reply)
    const replyComment = (c_id) => {
        axios.post(`http://localhost:8000/r/v?board_id=${board_id}&c_id=${c_id}&pages=${pages}`, {
            "text": comment.reply
        },{
            headers : {
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
        }).then(r => {
            console.log(r);
            alert('작성 완료!');
            window.location.reload();
        }).catch(e => {
            console.log(e);
            alert("에러")
        })
    };
    const clickReplyingSubmit = (c_id) => {
        if(removeSpace(comment.reply)){
            replyComment(c_id);
        } else {
            alert('내용을 입력 해주세요')
        }
    };

    // DELETE

    const deleteApi = () => {
        axios.delete(`http://localhost:8000/r/v?board_id=${board_id}&pages=${pages}`,{
            headers : {
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
        }).then(r => {
                console.log(r),
                alert('삭제 완료!'),
                props.router.push(`/r?pages=${pages}`)
        }).catch(e => {
            console.log(e);
        })
    };
    const clickDelete = () => {
        deleteApi();
    };

    const deleteComment = (comment_id,reply_id) => {
        if(!reply_id){
            axios.delete(`http://localhost:8000/r/v?board_id=${board_id}&comment_id=${comment_id}&pages=${pages}`,{
                headers : {
                    "access_token_cookie" : getCookie("access_token_cookie"),
                    "refresh_token_cookie" : getCookie("refresh_token_cookie")
                },
                mode : "cors",
                withCredentials : true
            }).then(r => {
                console.log(r);
                alert("삭제완료!");
                props.router.reload();
            })
        }else {
            axios.delete(`http://localhost:8000/r/v?board_id=${board_id}&comment_id=${comment_id}&reply_id=${reply_id}&pages=${pages}`,{
                headers : {
                    "access_token_cookie" : getCookie("access_token_cookie"),
                    "refresh_token_cookie" : getCookie("refresh_token_cookie")
                },
                mode : "cors",
                withCredentials : true
            }).then(r => {
                console.log(r);
                alert("삭제완료!");
                props.router.reload();
            })
        }
    }
    return (
        <div className='content'>
            <div className='pageTitle'>
                {props.pageInfo.pageTitle}
            </div>
            <table className='detailTable'>
            {props.ssrData.map(data => (
                <tbody key={data.text}>
                    <tr>
                        <td>{props.pageInfo.theadAuthor}</td>
                        <td>{data.username}</td>
                        <td>{props.pageInfo.theadDay}</td>
                        <td>{data.createdAt}</td>
                    </tr>
                    <tr>
                        <td>{props.pageInfo.theadTitle}</td>
                        <td colSpan='3'>{data.title}</td>
                    </tr>
                    <tr className='detailBody'>
                        <td>{props.pageInfo.theadBody}</td>
                        <td colSpan='3'>{data.text}</td>
                    </tr>
                </tbody>
                ))}
            </table>
            <div className='commentContainer'>
                <div className='postingComment'>
                    <div className='commentUser'>
                        <a>augusstt06</a>
                    </div>
                    <div className='typingComment'>
                        <textarea placeholder  = '댓글을 입력하세요'
                                  name         = 'comment'
                                  defaultValue = ''
                                  onChange     = {typingComment}/>
                    </div>
                    <div className='commentBtn'>
                        <button onClick = {clickCommentSubmit}
                                type    = 'submit'>
                            <FiSend size='25'/>
                        </button>
                    </div>
                </div>
                <RoomCommentList ssrData             = {props.ssrData}
                                 comment             = {comment}
                                 typingComment       = {typingComment}
                                 replyComment        = {replyComment}
                                 deleteComment       = {deleteComment}
                                 clickReplyingSubmit = {clickReplyingSubmit}/>
            </div>
            <div className='btnContainer'>
                <button>
                    <Link href = {{pathname : `/r` , query : {pages : pages}}}>
                        <a>목록으로</a>
                    </Link>
                </button>
                {props.user === props.ssrData[0]["username"] ?
                <>
                    <button onClick={() => {props.updateState.setGoUpdate(!props.updateState.goUpdate)}}>
                        <a>수정</a>
                    </button>
                    <button onClick={() => {clickDelete()}}>
                        <a>삭제하기</a>
                    </button>
                </> : <></>
                }
            </div>
        </div>
    )
};
export default GetRoomDetailView;