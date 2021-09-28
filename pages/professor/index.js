import React from 'react';
import axios from 'axios';
import Link from 'next/link';

// 교수의 고유 아이디로 분류
export const getStaticProps = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res)
    const data = await res.data

    return {
        props : {data}
    }
}

const ProfessorList = ({data}) => {
    return (
        <div>
            <h1>교수 리스트</h1>
            {data.map(data => (
                <div key = {data.id}>
                    <br/>
                    <Link href = {`/professor/info/${data.id}`}>
                        <a>이름 : {data.name} 이메일 : {data.email}</a>
                    </Link>
                    <br/>
                </div>
            ))}

        </div>
    )
}

export default ProfessorList
