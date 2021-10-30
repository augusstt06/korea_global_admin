import React, {useState} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import Side from '../../component/Side';

// 댓글 기능 만들기
// 현재 댓글 기능에 필요한것 : 로그인 사용자가 누구인지(author), 댓글 내용(content), 작성 시간(time), 어떤 글인지 (index), 어디 카테고리의 글인지 (page)
// 나중에 로그인까지 만들고 나서 만들어 POST해야 한다.
// 여기는 공통 상세화면 컴포넌트이므로
// 어떤 게시판의 글을 클릭했는지 알아야 한다.
//  즉, router를 이용해 어떤 페이지인지 string으로 이 컴포넌트에 전달

// 게시판 테이블은 1개이기에, 게시판카테고리, 게시물인덱스 번호를 담아서 request해야 한다.
export const getStaticPaths = async() => {
    const res   = await axios.get('https://jsonplaceholder.typicode.com/posts?_start =0&_end =10');
    const data  = await res.data;
    const paths = data.map((data) => ({
      params : { id : data.id.toString() }
    }));

    return {
        paths,
        fallback : false
    }
};
export const getStaticProps = async({params}) => {
    const res  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.data;

    return {
        props : {data}
    }
};

const BoardDetail = ({data}) => {
    const router   = useRouter();
    const category = router.query.category;
    const pageId   = (category === '1'   ?  'free'   :
                      category === '2'   ?  'study'  :
                      category === '3'   ?  'market' : null);


    console.log(category);
    console.log(pageId)
    // 댓글
    const [comment, setComment] = useState({
        author : '',
        content : '',
        time : '',
        page : pageId,
        index : data.id
    })
    const changeInput = (e) => {
        const newInput          = {...comment};
        newInput[e.target.name] = e.target.value;
        setComment(newInput);
    }
    console.log(comment);
    // 버튼 클릭 -> comment에 담긴 내용을 api로 POST REQUEST
    // 댓글 목록 받아올때는 api에서 GET으로 RESPONSE
    // const postData = async() => {
    //     const postRes = await axios.post()

    // }

    // const postComment = () => {
    //     postData();
    //     setComment();
    // }
    return (
      <div className='detail'>
        <div className='component'>
          <Side items = {[
                      {id : 2, link : '/board/study', text : '스터디 게시판'},
                      {id : 3, link : '/board/market', text : '장터 게시판'}
                  ]} title = '게시판' />
        </div>
        <div className='content'>
          <h1>자유 게시판</h1>
          <div>
            <table>
              <thead>
                <tr className='tableFirst'>
                  <th>번호</th>
                  <td>xxx</td>
                  <th>작성자</th>
                  <td>{data.id}</td>
                  <th>날짜</th>
                  <td>xx.xxx.xxx</td>
                </tr>
              </thead>
              <tbody>
                <tr className='tableSecond'>
                  <th>제목</th>
                  <td colSpan='6'>{data.title}</td>
                </tr>
                <tr className='tableThird'>
                  <th colSpan='7'>내용</th>
                </tr>
                <tr className='tableFourth'>
                  <td colSpan='7'>{data.body}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <a>댓글</a>
              <input typeof='text'
                    placeholder = '댓글을 입력하세요'
                    name = 'content'
                    value = {comment.content}
                    onChange = {changeInput}
                    size="40"/>
              <button>등록</button>
            </div>
            <div>
                여긴 댓글 목록
            </div>
            <div className='button'>
              <Link href = {`/board/${category}`}>
                  목록으로
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BoardDetail
