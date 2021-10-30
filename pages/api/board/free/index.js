import posts from "../../../../posts.json";

export default(req, res) => {
    const free = posts.filter(data => data.category === 1);
    return res.status(200).json(free);
}