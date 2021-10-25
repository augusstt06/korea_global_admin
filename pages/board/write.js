import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Side from '../../component/Side'
// 어디에서 눌렀는지 알아야 하니까 이것도 역시 Router로 경로를 파악하여 props로 보낸다

const Write = () => {
    const router = useRouter();
    const pageCategory = router.query.category
    const pageId = ( pageCategory === 'free' ? '1' :
                        pageCategory === 'study' ? '2' :
                            pageCategory === 'market' ? '3' : null);

    const [inputBoard, setInputBoard] = useState({
        category : pageId,
        title : '',
        content : ''
    });
    console.log(inputBoard)
    const changeInput = (e) => {
        const newInput = {...inputBoard}
        newInput[e.target.name] = e.target.value
        setInputBoard(newInput)
    }
    // post메소드 호출은 나중에
    return (
        <div>
            <Side items = {[
                        {id : 2, link : '/board/study', text : '스터디 게시판'},
                        {id : 3, link : '/board/market', text : '장터 게시판'}
                    ]} title = '게시판' />
            <h3>글 작성</h3>
            페이지 정보 : {pageCategory}
            <textarea typeof = 'text'
                    placeholder = '제목을 입력하세요'
                    name = 'title'
                    value = {inputBoard.title}
                    onChange = {changeInput} />
            <textarea typeof = 'text'
                    placeholder = '내용을 입력하세요'
                    name = 'content'
                    value = {inputBoard.content}
                    onChange = {changeInput} />
            <br/><br/>
            <div>
                <Link href = {`/board/${pageCategory}`}>
                    목록으로
                </Link>
            </div>
        </div>
    )
}

export default Write
