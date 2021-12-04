import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Side from "../../../component/Side";
import GetDetailView from "./detailView/getView/GetDetailView";
import PutDetailView from "./detailView/putView/putDetailView";

export const pageQuery = () => {
    const router = useRouter();
    const query = router.query;
    return {query}
};

export const getServerSideProps = async({query}) => {
    const res = await axios.get(`http://127.0.0.1:8000/r/v?board_id=${query.board_id}&pages=${query.pages}`);
    const data = res.data

    return {
        props : {data}
    };
};

const RoomView = ({data}) => {
    // Page Info
    const router = useRouter();
    const [sideInfo] = useState([
        {id : 1, link : '/r', text : '자유', query : 'free'},
        {id : 2, link : '/r', text : '장터', query : 'market'},
    ]);
    const [pageInfo] = useState({
        pageTitle : '작성글 상세',
        updateTitle : '작성 글 수정',
        sideTitle : '학생공간',
        theadNum : 'No',
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : '날짜',
    });

    const [goUpdate, setGoUpdate] = useState(false);
    const updateState = {goUpdate, setGoUpdate};

    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : sideInfo[0].id, link : sideInfo[0].link, text : sideInfo[0].text, query : sideInfo[0].query},
                    {id : sideInfo[1].id, link : sideInfo[1].link, text : sideInfo[1].text, query : sideInfo[1].query},
                ]} title = {pageInfo.sideTitle}/>
            </div>
            {goUpdate ?
            <GetDetailView pageInfo = {pageInfo}
                           router = {router}
                           ssrData = {data}
                           updateState = {updateState}/> :
            <PutDetailView pageInfo = {pageInfo}
                           router = {router}
                           ssrData = {data}
                           updateState = {updateState}/>}
        </div>
    )
};
export default RoomView;
