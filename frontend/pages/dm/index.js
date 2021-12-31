import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Side from "../../component/Side";
import axios from "axios";
import DmBox from "./dmBox";

const DirectMsg = () => {
    // Basic Section
    const router = useRouter();
    const [pageInfo] = useState({
        pageTitle : '쪽지함',
        sideTitle : '마이 페이지',
        theadNum : 0,
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
    });
    const [sideInfo] = useState([
        {id : '미정', link : `/mg`, text : '작성 게시물'},
        {id : '미정', link : `/cy`, text : '작성 댓글'},
        {id : '미정', link : `/dm`, text : '쪽지함'}
    ]);
    // API Request Section (GET)

    const [dmList, setDmList] = useState([]);
    const [dmDetail, setDmDetail] = useState([]);
    // const [opponentUser, setOpponentUser] = useState('');

    const getDmList = async() => {
        console.log('Now Loading...');
        const res = await axios.get(`http://127.0.0.1:8000/dm`);
        setDmList(res.data)
    };
    useEffect(() => {
        getDmList()
            .then(r => console.log(r))
    }, []);
    const getDmDetail = async(opponent) => {
        const res = await axios.get(`http://127.0.0.1:8000/dm?opponent=${opponent}`);
        setDmDetail(res.data);
    };
    // const getOpponentId = (opponent) => {
    //     // 굳이 url 바꿀 필요가 있나...
    //     history.pushState({opponent : opponent}, null, `${router.asPath}`+`?opponent=${opponent}`);
    // };
    // 이건 임의로 내가 넣은거
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : sideInfo[0].id, link : sideInfo[0].link , text : sideInfo[0].text},
                    {id : sideInfo[1].id, link : sideInfo[1].link, text : sideInfo[1].text},
                ]} title = {pageInfo.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{pageInfo.pageTitle}</a>
                </div>
                <div className='msgBox'>
                    <div className='msgList'>
                        <div className='myNickname'>doverr</div>
                        {dmList.map(list => list.map(data => (
                            // 아직 response가 어떻게 올지 모르므로, 일단 username이라고 명명
                            <div className='receiveList'>
                                <div className ='receivePhoto'>user Ph</div>
                                <div className ='receiveOpponent'>
                                    <div className = 'receiveInfo'>
                                        {data.username}
                                    </div>
                                    <div className = 'receiveMsg'
                                         onClick   = {getDmDetail(data.username)}>
                                        {data.text}
                                    </div>
                                </div>
                            </div>
                        )))}
                    </div>
                    <DmBox dmDetail     = {dmDetail}/>
                </div>
            </div>
        </div>
    )
};
export default DirectMsg;