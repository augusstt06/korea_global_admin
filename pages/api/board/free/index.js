let today = new Date();
let year  = today.getFullYear();
let month = today.getMonth();
let date  = today.getDay();
let currentDay = year + '/' + month + '/' +  date;

const posts = [
  {
    id          : 1,
    category    : 1,
    title       : '자유 게시판',
    text        : 'Test',
    upload_date : `${currentDay}`,
    content_url : ''
  },
  {
    id          : 2,
    category    : 1,
    title       : '자유 게시판 Test',
    text        : 'Test2',
    upload_date : `${currentDay}`,
    content_url : ''
  },
  {
    id          : 3,
    category    : 1,
    title       : '자유 게시판 Api Test',
    text        : 'Test3',
    upload_date : `${currentDay}`,
    content_url : ''
  }
]


export default function freeApi(req,res){
  res.status(200).json(posts);
};
