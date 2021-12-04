import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from 'axios';
import Link from 'next/link';
import Side from "../../component/Side";

const RoomPosting = () => {
    // Basic Section
    const router = useRouter();
    const query = router.query;
    // 나중에 로그인 정보로 바꾸기
    const virtualName = 'mingyu'

    const [pageInfo] = useState({
        pageTitle : '글 작성',
        sideTitle : '학생공간',
        theadTitle : '제목',
        theadBody : '내용',
        theadAuthor : '작성자',
        theadDay : '날짜'
    });
    const [sideInfo] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'},
    ]);
    return (
        <div></div>
    )
};
export default RoomPosting;