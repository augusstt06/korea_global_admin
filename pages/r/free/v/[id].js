import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import Link from 'next/link';
import Side from "../../../../component/Side";
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const Detail_free =  () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // 필요 기능 : Get API Connect => Response Data Mapping => Rendering
    //           Comment....

    // API Request :  GET  => Detail Post, Comment List
    //                POST => ReComment
    //                ====> ReComment 될때마다 Page Redirection

    // Basic Section
    const router = useRouter();
    const query = router.query;
    const postId = query.id;

    const [option] = useState({
        pageTitle : '작성 글 상세',
        sideTitle : '학생공간',
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
        theadAuthor : '작성자'
    });
    const [idSide] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'},
        {id : 3, link : `/r/schedule`, text : '시간표 인벤'}
    ]);
    // API Request Section ( GET, POST, PUT, DELETE )

    // GET Request
    const [detail, setDetail] = useState([]);

    const getApi = async() => {
        const res = await axios.get('/');
        const data = res.data;
        setDetail(data);
    };

    // POST Request (댓글)

    // 상세화면 Response 형태 :{
    //         id : 카테고리 아이디,
    //         title : 제목,
    //         create_at : 날짜,
    //         author : 작성자,
    //         text : 내용,
    //         updated_at : 업데이트 날짜,
    //         board_comment :
    // }
    // board_comment Response 형태 : {
    //         board_id : 'response 받은걸로',
    //         user_name : '로그인 상태',
    //         create_at : 'response 받은걸로',
    //         id : '',
    //         text : '댓글 입력 상태',
    //         comment_reply : 'response 받은걸로'
    // }
    //                  comment_reply 안 형태 : id, board_id, text, comment_id, user_name, created_at

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
        return word.length
    };
    // 댓글 POST Request 함수
    const postComment = () => {
        console.log('Now Posting Comment...');
        axios.post('/', {
            data : {
                id : postId,
                user_name : '',
                text : (comment.comment).trim()
            }
        });
        console.log('Posting Comment Complete!')
    };
    // 클릭시 댓글 입력내용 => POST 요청 후 현재 페이지 리디렉션
    const clickCommentSubmit = () => {
        if(removeSpace(comment.comment)){
            postComment();
            alert('작성이 완료 되었습니다!');
            window.location.reload();
        } else{
            alert('내용을 입력해 주세요');
        }
    };
    // 대댓글 POST Request 함수
    const replyComment = () => {
        console.log('Now Replying...');
        axios.post('/',{
            data : {
                board_id :'',
                username : '',
                create_at : '',
                id : '',
                text : comment.reply.trim()
            }
        });
        console.log("Replying Complete!")
    }
    const clickReplySubmit = () => {
        if(removeSpace(comment.reply)){
            replyComment();
            alert('작성이 완료 되었습니다!');
            window.location.reload();
        }else{
            alert('내용을 입력해 주세요')
        }
    };
    // 댓글 PUT Request
    // 댓글에서 Response된 사용자와 현재 user의 사용자가 같으면 활성화 되게 만든다.
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link, text : idSide[0].text},
                    {id : idSide[1].id, link : idSide[1].link, text : idSide[1].text},
                    {id : idSide[2].id, link : idSide[2].link, text : idSide[2].text}
                ]} title = {option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <table className='detailTable'>
                    <tbody>
                        <tr>
                            <td>{option.theadAuthor}</td>
                            <td>doverr</td>
                            <td>{option.theadDay}</td>
                            <td>2021.08.18</td>
                        </tr>
                        <tr>
                            <td>{option.theadTitle}</td>
                            <td colSpan='3'>
                                제목이 들어갑니다
                            </td>
                        </tr>
                        <tr className='detailBody'>
                            <td>{option.theadBody}</td>
                            <td colSpan='3' >
                                내용이 들어갑니다
                            </td>
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
                    {/* 여기는 나중에 Response Data Mapping*/}
                    <div className='commentList'>
                        <div className='commentBox'>
                            <div className='commentId'>
                                <a>Id</a>
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
                            <button onClick={clickReplySubmit}>
                                <FiSend size='15'/>
                            </button>
                        </div> :
                        <></>}
                    </div>
                {/*    */}
                </div>
                <div className='btnContainer'>
                    <button>
                        <Link href = {{pathname : `/r/${query.page}`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Detail_free;