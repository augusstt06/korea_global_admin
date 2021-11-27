import React, {useState} from "react";
import Link from 'next/link';
import Side from "../../component/Side";

// 예약형은 좀 기다려봐
const Reservation = () => {
    // 함수는 Depth 3 넘지 않게 기능 별로 최대한 나눠서 작성하기

    // Basic Section
    const [option] = useState({
        pageTitle : "예약",
    });
    return (
        <div className='main'>
            <div className='component'>
                <Side items={[
                    {id : 1, link : `/`, text : '아직 미정'}
                ]} title = {option.pageTitle}/>
            </div>
            <div className='content'>
                <div className='contentTop'>
                    <div className='pageTitle'>
                        <div>{option.pageTitle}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reservation;