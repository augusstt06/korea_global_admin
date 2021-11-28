import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const DetailFree = (props) => {
    console.log(props)

    // Basic Section
    const [comment, setComment] = useState({
        comment : '',
        reply : ''
    });
    const [clickReply, setClickReply] = useState(false);

    const typingComment = (e) => {
        const newInput = {...comment};
        newInput[e.target.name] = e.target.value;
        setComment(newInput);
    };
    const removeSpace = (string) => {
        const word = string.replace(/ /g, "");
        return word.length;
    };

    // GET Request
    const [detail, setDetail] = useState([]);
    console.log(props.router.query.category)
    console.log(props.router.query.id)
    const getApi = async() => {
        // const res = await axios.get('/');
        const res = await axios.get(`http://127.0.0.1:8000/r/${props.router.query.category}/v/${props.router.query.id}`);
        const data = res.data;
        setDetail(data);
    };
    useEffect(() => {
        getApi();
    }, [])
    // 댓글 POST Request
    const postComment = () => {
        console.log('Now Posting Comment...');
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            data : {
                id : props.router.query.id,
                user_name : '',
                text : comment.comment.trim()
            }
        });
        console.log('Posting Comment Complete!');
    };
    const clickCommentSubmit = () => {
        if(removeSpace(comment.comment)){
            postComment();
            alert('작성이 완료되었습니다!');
            window.location.reload();
        } else {
            alert('내용을 입력해 주세요');
        }
    };

    // 대댓글 POST Request
    const replyComment = () => {
        console.log('Now Relying...');
        axios.post('/',{
            data : {
                board_id : '',
                username : '',
                id : '',
                text : comment.reply.trim()
            }
        });
        console.log('Replying Complete!');
    };
    const clickReplyingSubmit = () => {
        if(removeSpace(comment.reply)){
            replyComment();
            alert('작성이 완료되었습니다!');
            window.location.reload();
        } else {
            alert('내용을 입력해주세요')
        }
    };

    // 게시글 DELETE Request
    const deleteApi = () => {
        console.log('Now Delete...');
        axios.delete(`${props.router.asPath}`);
        console.log('Delete Complete!');
    };
    const clickDelete = () => {
        deleteApi();
        alert('삭제가 완료되었습니다!');
        props.router.push(`/r/${props.router.query.page}`);
    };

    console.log(detail)
    console.log(detail[0])
    return (
        <div className='content'>
            <div className='pageTitle'>
                {props.pageData.pageTitle}
                작성글 상세
            </div>
            <table className='detailTable'>
                <tbody>
                    <tr>
                        <td>{props.pageData.theadAuthor}</td>
                        <td>{detail[0].author}</td>
                        <td>{props.pageData.theadDay}</td>
                        {/*<td>{detail[0]['created_at']}</td>*/}
                    </tr>
                    <tr>
                        <td>{props.pageData.theadTitle}</td>
                        {/*<td colSpan='3'>{detail[0]['title']}</td>*/}
                    </tr>
                    <tr className='detailBody'>
                        <td>{props.pageData.theadBody}</td>
                        {/*<td colSpan='3'>{detail[0]['text']}</td>*/}
                    </tr>
                </tbody>
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
                <div className='commentList'>
                    <div className='commentBox'>
                        <div className='commentId'>
                            <a>ID</a>
                        </div>
                        <div className='comment'>
                            <a>Comment Response</a>
                        </div>
                        <div className='reComment'>
                            <BsArrowReturnLeft onClick={() => {setClickReply(!clickReply)}}/>
                        </div>
                    </div>
                    {clickReply === true ?
                    <div className='reply'>
                        <textarea placeholder='댓글을 입력하세요'
                                  onChange={typingComment}
                                  name='reply'/>
                        <button onClick={clickReplyingSubmit}>
                            <FiSend size='15'/>
                        </button>
                    </div> : <></>}
                </div>
            </div>
            <div className='btnContainer'>
                <button>
                    <Link href = {{pathname : `/r/${props.router.query.page}`}}>
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