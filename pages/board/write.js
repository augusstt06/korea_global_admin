import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Side from '../../component/Side'
// 어디에서 눌렀는지 알아야 하니까 이것도 역시 Router로 경로를 파악하여 props로 보낸다

const Write = () => {
    const router       = useRouter();
    const pageCategory = router.query.category
    const pageId       = ( pageCategory === '1'   ? 'free'    :
                           pageCategory === '2'   ? 'market'  :
                           pageCategory === '3'  ? 'study'    : null);

    const [inputBoard, setInputBoard] = useState({
        category : pageId,
        title    : '',
        content  : ''
    });
    const changeInput = (e) => {
        const newInput          = {...inputBoard}
        newInput[e.target.name] = e.target.value
        setInputBoard(newInput)
    }
    // post메소드 호출은 나중에
    // const postingData = async() => {
    //     const res = axios.post(/board/)
    // }
    return (
        <div className='posting'>
            <div className='component'>
                <Side items={[
                    {id : 1, link : '/board/free', text : '자유 게시판'},
                    {id : 2, link : '/board/market', text : '장터 게시판'},
                    {id : 3, link : '/board/study', text : '스터디 게시판'}
                ]} title = '게시판' />
            </div>
            <div className='content'>
                <h1>글 작성</h1>
                <a>페이지 정보 : {pageCategory}</a>
                <div className='contentBox'>
                    <textarea typeof ='text'
                              placeholder = '제목을 입력하세요'
                              name = 'title'
                              value = {inputBoard.title}
                              onChange = {changeInput} />
                    <textarea typeof = 'text'
                          placeholder = '내용을 입력하세요'
                          name = 'content'
                          value = {inputBoard.content}
                          onChange = {changeInput} />
                </div>
            </div>
            <div className='back'>
              <Link href = {`/board/${pageId}`}>
                  목록으로
              </Link>
            </div>
        </div>

    )
}

export default Write
