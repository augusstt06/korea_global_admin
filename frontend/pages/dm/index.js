import React, {useState} from "react";
import Side from "../../component/Side";

const DirectMsg = () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기
    const [option] = useState({
        pageTitle : '쪽지함',
        sideTitle : '마이 페이지',
        theadNum : 0,
        theadTitle : '제목',
        theadBody : '내용',
        theadDay : '날짜',
    });
    const [idSide] = useState([
        {id : '미정', link : `/mg`, text : '작성 게시물'},
        {id : '미정', link : `/cy`, text : '작성 댓글'},
        {id : '미정', link : `/dm`, text : '쪽지함'}
    ]);
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : idSide[0].id, link : idSide[0].link , text : idSide[0].text},
                    {id : idSide[1].id, link : idSide[1].link, text : idSide[1].text},
                    {id : idSide[2].id, link : idSide[2].link, text : idSide[2].text}
                ]} title = {option.sideTitle}/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <a>{option.pageTitle}</a>
                </div>
                <div className='msgBox'>
                    <div className='msgList'>
                        <div className='myNickname'>
                            doverr
                        </div>
                        <div className='receiveList'>
                            <div className='receivePhoto'>user Ph</div>
                            <div className='receiveOpponent'>
                                <div className='receiveInfo'>user Info</div>
                                <div className='receiveMsg'>Chat Response</div>
                            </div>
                        </div>
                        <div className='receiveList'>
                            <div className='receivePhoto'>user Ph</div>
                            <div className='receiveOpponent'>
                                <div className='receiveInfo'>user Info</div>
                                <div className='receiveMsg'>Chat Response</div>
                            </div>
                        </div>
                        <div className='receiveList'>
                            <div className='receivePhoto'>user Ph</div>
                            <div className='receiveOpponent'>
                                <div className='receiveInfo'>user Info</div>
                                <div className='receiveMsg'>Chat Response</div>
                            </div>
                        </div>
                        <div className='receiveList'>
                            <div className='receivePhoto'>user Ph</div>
                            <div className='receiveOpponent'>
                                <div className='receiveInfo'>user Info</div>
                                <div className='receiveMsg'>Chat Response</div>
                            </div>
                        </div>
                    </div>
                    <div className='msgDetail'>
                        <div className='opponentNickname'>
                            <div className='receivePhoto'>user Ph</div>
                            <div className='receiveInfo'>user Info</div>
                        </div>
                        <div className='msgChatBox'>
                            {/* 상대방 메시지 Response Data Mapping*/}
                            <div className='opponentChat'>
                                <div className='receivePhoto'>user Ph</div>
                                <div className='ChatMsg'>채팅 내용 </div>
                            </div>
                            {/**/}
                            {/* 내 메시지 Response Data Mapping*/}
                            <div className='myChat'>
                                <div className='myPhoto'>user Ph</div>
                                <div className='ChatMsg'>채팅 내용dasadsdasd</div>
                            </div>
                        {/*    */}
                        </div>
                        <div className='typingMsg'>
                            <div className='typingChat'>
                                <textarea placeholder='메시지를 입력하세요'/>
                            </div>
                            <div className='typingBtn'>
                                <button>
                                    <a>전송</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default DirectMsg;