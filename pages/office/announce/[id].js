import axios from 'axios'
import React from 'react'
import Link from 'next/link'

import Side from '../../../component/Side'

// 여기도 그렇게 막 바뀔일이 없으니 정적생성을 해놓는다

export const getStaticPaths = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data

    const paths = data.map(data => ({
        params : { id : data.id.toString()}
    }))
    return {
        paths,
        fallback : false
    }
}
export const getStaticProps = async({params}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = res.data;

    return {
        props : {data}
    }
}


const AnnounceDetail = ({data}) => {
    return (
        <div>
            <Side items = {[
                {id : 5, link : '/office/question', text : 'Q&A'}
            ]} title = '글로벌경영학부' />
            <h3>공지 상세</h3>
            <div>
                {
                    <div>
                        제목 : {data.title}
                        <br/>
                        내용 : {data.body}
                    </div>
                }
            </div>
            <br/>
            <Link href = '/office/announce'>
                목록으로
            </Link>
        </div>
    )
}

export default AnnounceDetail
