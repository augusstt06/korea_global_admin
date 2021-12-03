import React, { useState } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import Side from "../../../../component/Side";
import DetailFree from "./id_detail/getDetail/detailFree";
import UpdateFree from "./id_detail/putDetail/updateFree";

export const pageParams = () => {
    const router = useRouter();
    const query = router.query;
    return {query}
}

export const getServerSideProps = async({query}) => {

    const res = await axios.get(`http://127.0.0.1:8000/r/${query.category}/v/${query.id}`);
    const data = res.data

    return {
        props : {data}
    };
};


const Detail_Container =  ({data}) => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // Basic Section
    const router = useRouter();

    const [option] = useState({
        pageTitle : '작성 글 상세',
        updateTitle : '작성 글 수정',
        sideTitle : '학생공간',
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
        theadAuthor : '작성자'
    });
    const [idSide] = useState([
        {id : 1, link : `/r/free`, text : '자유'},
        {id : 2, link : `/r/market`, text : '장터'},
        {id : 3, link : `/r/schedule`, text : '시간표 인벤'}
    ]);

    // props로 넘길 것 들

    const [goUpdate, setGoUpdate] = useState(false);
    const updateState = {goUpdate, setGoUpdate};

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link, text : idSide[0].text},
                    {id : idSide[1].id, link : idSide[1].link, text : idSide[1].text},
                    {id : idSide[2].id, link : idSide[2].link, text : idSide[2].text}
                ]} title = {option.sideTitle}/>
            </div>
            {goUpdate === false ?
                    <DetailFree pageData = {option}
                                router={router}
                                preData={data}
                                updateState={updateState}/>
                        :
                    <UpdateFree pageData={option}
                                router={router}
                                preData={data}
                                updateState={updateState}/>}
        </div>
    )
}
export default Detail_Container;