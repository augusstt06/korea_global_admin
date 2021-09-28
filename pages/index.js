import Side from "../component/Side"

export default function Home() {
  return (
    <div className= 'main'>
      <div className='component'>
        <Side items = {[
          {id : 1, link : '/board/free', text : '자유게시판'}
        ]}/>
      </div>
      <div className='content'>
        <h1>으아앙</h1>
        <div className='search'>
          <select className='option'>
              <option value = 'none' >선택</option>
              <option value = 'title'>제목</option>
              <option value = 'body'>내용</option>
          </select>
          <input type = 'text'
                  name = 'keyword'
                  // onChange={searchInput}
                  className='inputText'/>
          <button type = 'submit'
                  // onClick={clickSearch}
                  className='button'
                  >검색</button>
        </div>
        <div className = 'contentBox'>
          <table>
            <thead>
              <tr className='contentHeader'>
                <th>번호</th>
                <th>작성자</th>
                <th>제목</th>
                <th>날짜</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <style jsx>{`
            
            .main{
                display: flex;
                position :relative;
            }
            .component {
                margin-left : 20px;
                height : 150px;
                margin-right : 20px;
                /* background : gray; */
                position: relative;
                top : 120px
            }
            table{
                width :  1000px;
            }
            .contentBox {
                table-layout : fixed;
                /* width : 750px */
                border-top : 1px solid black;
                /* border-bottom : 1px solid black; */
                padding : 10px 5px;
                
            }
            tr {
                padding: 10px;
            }
            
            td {
                padding: 10px;
                text-align : center;
                border-bottom : 1px dotted black;
            }
            .write {
                position: relative;
                float : right;
                right : 7px;
                border : 1px solid black;
                width : 60px;
                text-align : center;
                padding: 5px;
            }
            .write:hover {
                background: black;
                color : white;
            }
            .search {
                position: relative;
                /* left : 950px; */
                
            }
            .inputText {
                margin-right : 10px;
                margin-left : 10px;
            }
            `}
        </style>
    </div>
  )
}
