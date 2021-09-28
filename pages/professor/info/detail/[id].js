import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
// 여기서도 똑같이 스태틱듀오 다 이용

export const getStaticPaths = async()=> {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await res.data

    const paths = data.map(data => ({
        params : {id : data.id.toString()}
    }))
    return{
        paths,
        fallback : false
    }
}

export const getStaticProps = async({params}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.data

    return {
        props : {data}
    }
}

const Detail = ({data}) => {
    const router = useRouter();
    console.log(router.query)
    return (
        <div>
            질의
            <br/><br/>
            {
                <div>
                    작성자 : {data.id}
                    <br/>
                    제목 : {data.title}
                    <br/>
                    내용 : {data.body}
                </div>
            }
            <br/><br/>
            <div>
                <Link href = {`/professor/info/${router.query.professor}`}>
                    목록으로
                </Link>
            </div>
        </div>
    )
}

export default Detail
