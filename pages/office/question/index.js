import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

import Side from '../../../component/Side'

// 질의전용 테이블 존재
const Question = () => {
    const [que, setQue] = useState([]);
    const QuestionData = async() => {
        console.log('Now Loading...');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
        setQue(res.data);
        console.log('Finish Loading');
    }

    useEffect(() => {
        QuestionData()
    }, [])
    return (
        <div>
            <Side items = {[
                {id : 4, link : '/office/announce', text : '공지'}
            ]} title = '글로벌경영학부' />
            <h1>과 질문</h1>
            <div>
                {que.map(que => (
                    <div key={que.id}>
                        <Link href={{pathname : `/office/question/${que.id}`}}>
                            <a>작성자 : {que.id} 제목 : {que.title}</a>
                        </Link>
                        <br/><br/>
                    </div>
                ))}
            </div>
            <div>
                <Link href = {{pathname : '/office/question/write'}}>
                    글 작성
                </Link>
            </div>
        </div>
    )
}

export default Question
