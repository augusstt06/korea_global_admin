import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Side from "../../../component/Side";
import GetRoomDetailView from "./detailView/getView/getRoomDetailView";
import PutRoomDetailView from "./detailView/putView/PutRoomDetailView";

export const getServerSideProps = async(context) => {
    const {query} = context;
    const ssrUrl = `http://127.0.0.1:8000/r/v?board_id=${query.board_id}&pages=${query.pages}`;
    const res = await axios.get(ssrUrl,{
        headers : (context.req ? {
            Cookie : context.req.headers.cookie
        } : "Error!"),
        mode : "cors",
        withCredentials : true
    });
    const getUser = await axios.get('http://localhost:8000/protected',{
        headers : (context.req ? {
            Cookie : context.req.headers.cookie
        } : "Error!"),
        mode : "cors",
        withCredentials : true
    });
    const user = getUser.data
    const data = res.data;
    return {
        props : {data, user}
    }
};

const RoomView = ({data, user}) => {
    // Page Info
    const router     = useRouter();
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
            {goUpdate === false?
            <GetRoomDetailView pageInfo    = {pageInfo}
                               router      = {router}
                               ssrData     = {data}
                               user = {user}
                               updateState = {updateState}/>
                :
            <PutRoomDetailView pageInfo    = {pageInfo}
                               router      = {router}
                               ssrData     = {data}
                               updateState = {updateState}/>
            }
        </div>
    )
};
export default RoomView;
