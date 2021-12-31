import React, {useState} from "react";
import axios from "axios";
import {getCookie} from "../../../../../Cookie/HandleCookie";

const PutRoomDetailView = (props) => {
    // Basic Section
    const [updateTitle, setUpdateTitle] = useState(`${props.ssrData[0].title}`);
    const [updateText, setUpdateText] = useState(`${props.ssrData[0].text}`);

    const board_id = props.ssrData[0].id;

    const putTitle = (e) => {
        setUpdateTitle(e.target.value);
    };
    const putContent = (e) => {
        setUpdateText(e.target.value);
    };
    const removeSpace = (string) => {
        const word = string.replace(/ /g, "");
        return word.length
    };

    // API Request Section ( PUT )
    const putApi = () => {
        axios.put(`http://localhost:8000/r/v?board_id=${board_id}`,{
            "title" : updateTitle.trim(),
            "text"  : updateText.trim()
        },{
            header : {
                "access_token_cookie" : getCookie("access_token_cookie"),
                "refresh_token_cookie" : getCookie("refresh_token_cookie")
            },
            mode : "cors",
            withCredentials : true
        }).then(r => {
            console.log(r);
            alert('수정이 완료 되었습니다!');
            window.location.reload();
        }).catch(e => {
            console.log(e)
        })
    };
    const clickUpdate = () => {
        if (removeSpace(updateTitle) !== 0 && removeSpace(updateText) !== 0){
            putApi();
        } else {
            alert('제목 또는 내용을 입력 해주세요');
        }
    };
    return (
        <div className='content'>
            <div className='pageTitle'>
                <a>{props.pageInfo.updateTitle}</a>
            </div>
            <table className='postingTable'>
                {props.ssrData.map(data => (
                    <tbody key={data.id}>
                        <tr>
                            <td>{props.pageInfo.theadAuthor}</td>
                            <td>{data.username}</td>
                            <td>{props.pageInfo.theadDay}</td>
                            <td>2021.08.18</td>
                        </tr>
                        <tr>
                            <td>{props.pageInfo.theadTitle}</td>
                            <td colSpan='3'>
                                <textarea className='titleText'
                                          placeholder='제목을 입력하세요'
                                          defaultValue={updateTitle}
                                          onChange={putTitle}/>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.pageInfo.theadBody}</td>
                            <td colSpan='3'>
                                <textarea className='bodyText'
                                          placeholder='내용을 입력하세요'
                                          defaultValue={updateText}
                                          onChange={putContent}/>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <div className='btnContainer'>
                <button onClick={clickUpdate}>
                    <a>수정완료</a>
                </button>
                <button onClick={() => {props.updateState.setGoUpdate(!props.updateState.goUpdate)}}>
                    <a>수정취소</a>
                </button>
            </div>
        </div>
    )
};
export default  PutRoomDetailView;