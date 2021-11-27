import React, {useState} from "react";
import axios from "axios";

const Update_free = (props) => {

    // Basic Section
    const [updateTitle, setUpdateTitle] = useState(`${props.testState.contentTest.title}`);
    const [updateContent, setUpdateContent] = useState(`${props.testState.contentTest.content}`);

    const putTitle = (e) => {
        setUpdateTitle(e.target.value);
    };
    const putContent = (e) => {
        setUpdateContent(e.target.value);
    };
    const removeSpace = (string) => {
        const word = string.replace(/ /g, "");
        return word.length
    };

    // PUT Request
    const putApi = () => {
        console.log('Now Update...');
        props.testState.setContentTest({
            id : props.testState.contentTest.id,
            title : updateTitle,
            content : updateContent
        });
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            data : {
                page : props.router.query.page,
                title : updateTitle.trim(),
                content : updateContent.trim()
            }
        });
        console.log('Update Complete!');
    };
    const clickUpdate = () => {
        if (removeSpace(updateTitle) !== 0 && removeSpace(updateContent) !== 0){
            putApi();
            alert('수정이 완료되었습니다!');
            props.updateState.setGoUpdate(!props.updateState.goUpdate);
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
                <tbody>
                    <tr>
                        <td>{props.pageData.theadAuthor}</td>
                        <td>{props.testState.contentTest.id}</td>
                        <td>{props.pageData.theadDay}</td>
                        <td>2021.08.18</td>
                    </tr>
                    <tr>
                        <td>{props.pageData.theadTitle}</td>
                        <td colSpan='3'>
                            <textarea className='titleText'
                                      placeholder='제목을 입력하세요'
                                      defaultValue={props.testState.contentTest.title}
                                      onChange={putTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <td>{props.pageData.theadBody}</td>
                        <td colSpan='3'>
                            <textarea className='bodyText'
                                      placeholder='내용을 입력하세요'
                                      defaultValue={props.testState.contentTest.content}
                                      onChange={putContent}/>
                        </td>
                    </tr>
                </tbody>
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
export default Update_free;