import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Side from "../../component/Side";
import { BsArrowReturnLeft} from "react-icons/bs";

const Detail_main = () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // 필요 기능 : Get API Connect => Response Data Mapping => Rendering
    //           Comment_single....

    // Basic Section
    const router = useRouter();
    const query = router.query;
    const [option] = useState({
        pageTitle : '작성 글 상세',
        sideTitle : '아직 미정',
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
        theadAuthor : '작성자'
    });
    const [idSide] = useState([
        {id : 10, link: `/`, text : 'test'}
    ]);

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link, text : idSide[0].text}
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
                            <td>2021.08.19</td>
                        </tr>
                        <tr>
                            <td>{option.theadTitle}</td>
                            <td colSpan='3'>
                                제목이 들어갑니다
                            </td>
                        </tr>
                        <tr className='detailBody'>
                            <td>{option.theadBody}</td>
                            <td colSpan='3'>
                                내용이 들어갑니다
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='commentContainer'>
                    <div className='postingComment'>
                        <div className='commentUser'>
                            <a>augusstt</a>
                        </div>
                        <div className='typingComment'>
                            <textarea placeholder='댓글을 입력하세요'/>
                        </div>
                        <div className='commentBtn'>
                            <button>
                                <a>댓글 작성</a>
                            </button>
                        </div>
                    </div>
                    {/* 여기는 나중에 Response Data Mapping*/}
                    <div className='commentList'>
                        <div className='commentId'>
                            <a>Id Response</a>
                        </div>
                        <div className='comment'>
                            <a>Comment Response</a>
                        </div>
                        <div className='reComment'>
                            <BsArrowReturnLeft/>
                        </div>
                    </div>
                    {/*    */}
                </div>
                <div className='btnContainer'>
                    <button>
                        <Link href = {{pathname : `/`}}>
                            <a>목록으로</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Detail_main;