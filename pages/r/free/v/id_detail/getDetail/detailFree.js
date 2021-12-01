import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";
import { FiSend } from 'react-icons/fi';
import CommentList from "./comment/commentList";

const DetailFree = (props) => {

    // 댓글은 props.detailState.detail.board_comment에 담긴다.

    // Basic Section
    const pageMove = (props.router.query.category === "1" ? "free" :
                        props.router.query.category === "2" ? "market" : null);
    const [comment, setComment] = useState({
        comment : '',
        reply : ''
    });
    // const [clickReply, setClickReply] = useState(false);


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

    //  GET

    const getApi = async() => {
        const res = await axios.get(`http://127.0.0.1:8000/r/${props.router.query.category}/v/${props.router.query.id}`);
        const data = res.data;
        props.detailState.setDetail(data);
    };
    useEffect(() => {
        getApi();
    }, []);

    //  POST (Comment_single)

    const postComment = () => {
        console.log('Now Posting Comment_single...');
        axios.post(`http://127.0.0.1:8000/r/${props.router.query.category}/v/${props.router.query.id}?board_id=${props.router.query.category}&nickname=${props.router.query.author}`, {
            "text": comment.comment
        }).then(r => console.log(r));

        console.log('Posting Comment_single Complete!');
    };
    const clickCommentSubmit = () => {
        if(removeSpace(comment.comment)){
            postComment();
            alert('작성이 완료되었습니다!');
            // window.location.reload(true);
            window.location.href;
            // props.router.push('/r/free');
        } else {
            alert('내용을 입력해 주세요');
        }
    };
    // POST (Reply)
    const replyComment = (c_id) => {
        console.log('Now Relying...');
        axios.post(`http://127.0.0.1:8000/r/${props.router.query.category}/v/${props.router.query.id}?board_id=${props.router.query.category}&nickname=${props.router.query.author}&c_id=${c_id}`, {
            "text": comment.reply.trim()
        }).then(r => console.log(r));
        console.log('Replying Complete!');
    };
    const clickReplyingSubmit = (c_id) => {
        if(removeSpace(comment.reply)){
            history.pushState({c_id : c_id}, null, `${props.router.asPath}`+`&c_id=${c_id}`);
            replyComment(c_id);
            alert('작성이 완료되었습니다!');
            // window.location.reload();
        } else {
            alert('내용을 입력해주세요')
        }
    };

    // DELETE

    const deleteApi = () => {
        console.log('Now Delete...');
        axios.delete(`http://127.0.0.1:8000/r/${props.router.query.category}/v/${props.router.query.id}`);
        console.log('Delete Complete!');
    };
    const clickDelete = () => {
        deleteApi();
        alert('삭제가 완료되었습니다!');
        props.router.push(`/r/${pageMove}`);
    };

    return (
        <div className='content'>
            <div className='pageTitle'>
                {props.pageData.pageTitle}
            </div>
            <table className='detailTable'>
            {props.detailState.detail.map(data => (
                <tbody key={data.id}>
                    <tr>
                        <td>{props.pageData.theadAuthor}</td>
                        <td>{data.author}</td>
                        <td>{props.pageData.theadDay}</td>
                        <td>{data.created_at}</td>
                    </tr>
                    <tr>
                        <td>{props.pageData.theadTitle}</td>
                        <td colSpan='3'>{data.title}</td>
                    </tr>
                    <tr className='detailBody'>
                        <td>{props.pageData.theadBody}</td>
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
                        <textarea placeholder='댓글을 입력하세요'
                                  name='comment'
                                  defaultValue=''
                                  onChange={typingComment}/>
                    </div>
                    <div className='commentBtn'>
                        <button onClick={clickCommentSubmit}
                                type='submit'>
                            <FiSend size='25'/>
                        </button>
                    </div>
                </div>

                <CommentList detailState={props.detailState}
                             comment={comment}
                             typingComment={typingComment}
                             replyComment={replyComment}
                             clickReplyingSubmit={clickReplyingSubmit}/>
            </div>
            <div className='btnContainer'>
                <button>
                    <Link href = {{pathname : `/r/${pageMove}`}}>
                        <a>목록으로</a>
                    </Link>
                </button>
                {/* 로그인 상태에 따라 수정/삭제 기능 활성화*/}
                <button onClick={() => {props.updateState.setGoUpdate(!props.updateState.goUpdate)}}>
                    <a>수정</a>
                </button>
                <button onClick={() => {clickDelete()}}>
                    <a>삭제하기</a>
                </button>
                {/*    */}
            </div>
        </div>
    )
};
export default DetailFree;