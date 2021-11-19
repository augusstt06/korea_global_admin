import React,{useState} from 'react';
import Link from 'next/link';
import Side from "../component/Side";


// 메인 = 공지
// Flexible 하게
const Main = () => {
    const [option] = useState({
        pageTitle : '공지사항',
        theadNum : 0,
        theadTitle : '제목',
        theadAuthor : '작성자',
        theadDay : 0
    })
    return (
        <div className='main'>
            <div className='component'>
                <Side items = {[
                    {id : 1, link : `/`, text : '아직 미정'}
                ]} title='아직 미정'/>
            </div>
            <div className='content'>
                <div className='pageTitle'>
                    <div>{option.pageTitle}</div>
                </div>
                <table className='boardTable'>
                    <thead>
                        <tr className='tableHead'>
                            <th>{option.theadNum}</th>
                            <th>{option.theadTitle}</th>
                            <th>{option.theadAuthor}</th>
                            <th>{option.theadDay}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tableBody'>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Main;