import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from 'next/link'

export const getStaticPaths = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await res.data;

    const paths = data.map(data => ({
        params : {id : data.id.toString()}
    }))
    return {
        paths,
        fallback : false
    }
}
export const getStaticProps = async({params}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.data

    return {
        props : {data}
    }
}


const Info = ({data}) => {
    const router = useRouter();
    const professorId = router.query.id
    console.log(professorId, '이게 교슈 아이디값')
    const[ask, setAsk] = useState([]);
    const askData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
        setAsk(res.data)
    }
    useEffect(() => {
        askData();
    }, [])
    return (
        <div>
            상세정보 및 질의응딥
            <h3>해당 교수 정보</h3>
            {
                <div>
                    이름 : {data.name}
                    <br/>
                    이메일 : {data.email}
                    <br/>
                    번호 : {data.phone}
                </div>
            }
            <br/>
            <h3>질의응답</h3>
            {ask.map(ask => (
                <div key={ask.id}>
                    <Link href = {{ pathname : `/professor/info/detail/${ask.id}`, query : {professor : professorId}}}>
                        <a>작성자 : {ask.id} 제목 : {ask.title}</a>
                    </Link>
                    <br/><br/>
                </div>
            ))}
            <div>
                <Link href = {{ pathname : '/professor/info/ask', query : {professor : professorId}}}>
                    <a>질문하기</a>
                </Link>
                <br/>
                <Link href='/professor'>
                    목록으로
                </Link>
            </div>
        </div>
    )
}

export default Info
