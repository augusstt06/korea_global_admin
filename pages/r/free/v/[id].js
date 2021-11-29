import React, { useState } from 'react';
import { useRouter } from "next/router";
import Side from "../../../../component/Side";
import DetailFree from "./detailFree";
import UpdateFree from "./updateFree";

const Detail_Container =  () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // Basic Section
    const router = useRouter();
    const query = router.query;
    const postId = query.id;
    console.log(router)

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

    // 이건 API 연결하면 삭제하면 됨 수정 잘 되나 테스트임 => 나중에 삭제할거
    const [contentTest, setContentTest] = useState({
            id : 'augusstt',
            title : '제목 테스트',
            content : '내용 테스트'
        });

    const testState = {contentTest, setContentTest};
    const [goUpdate, setGoUpdate] = useState(false);
    const updateState = {goUpdate, setGoUpdate};

    console.log(goUpdate);
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
                <DetailFree pageData ={option}
                            testState = {testState}
                            router = {router}
                            updateState = {updateState}/>
                :
                <UpdateFree pageData = {option}
                            testState = {testState}
                            router = {router}
                            updateState = {updateState}/>
            }
        </div>
    )
}
export default Detail_Container;