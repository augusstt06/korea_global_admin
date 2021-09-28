import React from 'react'
import axios from 'axios'
import Link from 'next/link'

import Side from '../../../component/Side'

export const getStaticPaths = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data;

    const paths = data.map(data => ({
        params : {id : data.id.toString()}
    }));

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async({params}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = res.data;

    return {
        props : {data}
    }
}

const QuestionDetail = ({data}) => {
    return (
        <div>
            <Side items = {[
                {id : 4, link : '/office/announce', text : '공지'}
            ]} title = '글로벌경영학부' />
            <h3>질문 자세히</h3>
            <div>
                {
                    <div>
                        작성자 : {data.id} 
                        <br/>
                        제목 : {data.title}
                        <br/>
                        내용 : {data.body}
                    </div>
                }
            </div>
            <br/>
            <div>
                <Link href = {{pathname : '/office/question'}}>
                    목록으로
                </Link>
            </div>
        </div>
    )
}

export default QuestionDetail
