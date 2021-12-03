import React, {useState} from "react";
import axios from "axios";

const UpdateFree = (props) => {
    // Basic Section

    const [updateTitle, setUpdateTitle] = useState(`${props.preData[0].title}`);
    const [updateText, setUpdateText] = useState(`${props.preData[0].text}`);

    const preId = props.preData[0].id;
    const preAuthor = props.preData[0].author;

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

    // // API Request Section ( PUT )

    const putApi = () => {
        console.log('Now Update...');
        axios.put(`http://127.0.0.1:8000/r/1/v/${preId}`,{
            "title" : updateTitle.trim(),
            "text" : updateText.trim()
        });
        console.log('Update Complete!');
    };
    const clickUpdate = () => {
        if (removeSpace(updateTitle) !== 0 && removeSpace(updateText) !== 0){
            putApi();
            alert('수정이 완료되었습니다!');
            // props.updateState.setGoUpdate(!props.updateState.goUpdate);
            window.location.reload(true);
        } else {
            alert('제목 또는 내용을 입력해주세요');
        }
    };

    return (
        <div className='content'>
            <div className='pageTitle'>
                <a>{props.pageData.updateTitle}</a>
            </div>
            <table className='postingTable'>
                {props.preData.map(data => (
                    <tbody key={data.id}>
                        <tr>
                            <td>{props.pageData.theadAuthor}</td>
                            <td>{data.author}</td>
                            <td>{props.pageData.theadDay}</td>
                            <td>2021.08.18</td>
                        </tr>
                        <tr>
                            <td>{props.pageData.theadTitle}</td>
                            <td colSpan='3'>
                                <textarea className='titleText'
                                          placeholder='제목을 입력하세요'
                                          defaultValue={updateTitle}
                                          onChange={putTitle}/>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.pageData.theadBody}</td>
                            <td colSpan='3'>
                                <textarea className='bodyText'
                                          placeholder='내용을 입력하세요'
                                          defaultValue={updateText}
                                          onChange={putContent}/>
                            </td>
                        </tr>
                    </tbody>
                ))}
                {/*{props.detailState.detail.map(data => (*/}
                {/*    <tbody key={data.id}>*/}
                {/*        <tr>*/}
                {/*            <td>{props.pageData.theadAuthor}</td>*/}
                {/*            <td>{data.author}</td>*/}
                {/*            <td>{props.pageData.theadDay}</td>*/}
                {/*            <td>2021.08.18</td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>{props.pageData.theadTitle}</td>*/}
                {/*            <td colSpan='3'>*/}
                {/*                <textarea className='titleText'*/}
                {/*                          placeholder='제목을 입력하세요'*/}
                {/*                          defaultValue={updateTitle}*/}
                {/*                          onChange={putTitle}/>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>{props.pageData.theadBody}</td>*/}
                {/*            <td colSpan='3'>*/}
                {/*                <textarea className='bodyText'*/}
                {/*                          placeholder='내용을 입력하세요'*/}
                {/*                          defaultValue={updateText}*/}
                {/*                          onChange={putContent}/>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    </tbody>*/}
                {/*))}*/}
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
export default UpdateFree;