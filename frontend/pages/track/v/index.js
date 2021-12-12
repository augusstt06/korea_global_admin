import React, {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Side from "../../../component/Side";
import GetTrackDetailView from "./detailView/getView/getTrackDetailView";
import PutTrackDetailView from "./detailView/putView/putTrackDetailView";

export const getServerSideProps = async(context) => {
    const {query} = context;
    const ssrUrl = `http://127.0.0.1:8000/track/v?board_id=${query.board_id}&pages=${query.pages}`;
    const res = await axios.get(ssrUrl, {
        headers : (context.req ? {
            Cookie : context.req.headers.cookie
        } : "E"),
        mode : "cors",
        withCredentials : true
    });
    const getUser = await axios.get('http://localhost:8000/protected', {
        headers : (context.req ? {
            Cookie : context.req.headers.cookie
        } : "E"),
        mode : "cors",
        withCredentials : true
    });
    const user = getUser.data;
    const data = res.data
    return {
        props : {data, user}
    }
}
const TrackView = ({data, user}) => {
    // Page Info
    const router     = useRouter();

    const [sideInfo] = useState([
        {id : 1, link : '/track', text : '창업',  query : 'startup'},
        {id : 2, link : '/track', text : '마케팅', query : 'marketing'},
        {id : 2, link : '/track', text : 'SCM', query : 'scm'},
        {id : 2, link : '/track', text : '회계/세무',   query : 'accounting'},
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
                    {id : sideInfo[2].id, link : sideInfo[2].link, text : sideInfo[2].text, query : sideInfo[2].query},
                    {id : sideInfo[3].id, link : sideInfo[3].link, text : sideInfo[3].text, query : sideInfo[3].query},
                ]} title = {pageInfo.sideTitle}/>
            </div>
            {goUpdate === false ?
            <GetTrackDetailView pageInfo    = {pageInfo}
                                router      = {router}
                                ssrData     = {data}
                                user        = {user}
                                updateState = {updateState}/> :
            <PutTrackDetailView pageInfo    = {pageInfo}
                                router      = {router}
                                ssrData     = {data}
                                updateState = {updateState}/>}
        </div>
    )
};
export default TrackView;