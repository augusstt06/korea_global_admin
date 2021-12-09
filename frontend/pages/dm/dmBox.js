import React from "react";

const DmBox = (props) => {
    // props = deDetail (채팅 상세임)

    return (
        <>
        {props.dmDetail.length !== 0 ?
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
                        <div className='ChatMsg'>채팅 내용</div>
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
            </div> :
            <div className='msgDetail'>
                <a>아직 내용 없음</a>
            </div>
            }
        </>
    )
};
export default DmBox;