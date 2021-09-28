import React, {useState} from 'react'
import Link from 'next/link'


import Side from '../../../component/Side'

const Write = () => {

    const [inputAsk, setInputAsk] = useState({
        title : '',
        content : ''
    })
    const changeInput = (e) => {
        const newInput = {...inputAsk}
        newInput[e.target.name] = e.target.value
        setInputAsk(newInput)
    }
    console.log(inputAsk)
    return (
        <div>
            <Side items = {[
                {id : 4, link : '/office/announce', text : '공지'}
            ]} title = '글로벌경영학부' />
            <h3>질문하기</h3>
            <textarea typeof = 'text'
                    placeholder = '제목을 입력하세요'
                    name = 'title'
                    value = {inputAsk.title}
                    onChange = {changeInput} />
            <textarea typeof = 'text'
                    placeholder = '내용을 입력하세요'
                    name = 'content'
                    value = {inputAsk.content}
                    onChange = {changeInput} />
            <div>
                <Link href = '/office/question'>
                    목록으로
                </Link>
            </div>
        </div>
    )
}
export default Write
