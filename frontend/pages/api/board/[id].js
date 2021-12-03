import posts from "../../../posts.json";
import freeData from "./free/index";
// export default async(req, res) => {
//     const correctCat = posts.filter(posts.category === req.query.category);
//     const correctPost = correctCat.filter(({id}) => id === req.query.id);
//     // const post = posts.filter( ({id}) => id === req.query.id );
    

//     if (correctPost) {
//         res.status(200).json({message:"sucess", correctPost});
//     } else {
//         res.status(400).json({message:"post not found"})
//     }
// }


// req에 카테고리랑 id를 담아서 보낸다
export default (req, res) => {
    const {id} = req.query;
    const data = posts.filter()
}