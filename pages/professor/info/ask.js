import React,{useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Ask = () => {
    const router = useRouter();
    console.log()
    const [ask, setAsk] = useState({
        professor : router.query.professor,
        title : '',
        content : ''
    })
    const changeInput = (e) =>{
        const newInput = {...ask}
        newInput[e.target.name] = e.target.value
        setAsk(newInput)
    }

    
    return (
        <div>
            <h3>질문하기</h3>
            <a>질문하는 교수 : {router.query.professor}</a>
            <br/>
            <textarea typeof = 'text'
                    placeholder = '제목을 입력하세요'
                    name = 'title'
                    value = {ask.title}
                    onChange = {changeInput} />
            <textarea typeof = 'text'
                    placeholder = '내용을 입력하세요'
                    name = 'content'
                    value = {ask.content}
                    onChange = {changeInput} />
            <div>
                <Link href = {`/professor/info/${router.query.professor}`}>
                    <a>목록으로</a>
                </Link>
            </div>
        </div>
    )
}

export default Ask
