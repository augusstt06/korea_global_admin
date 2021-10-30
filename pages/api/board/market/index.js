import posts from "../../../../posts.json";

export default (req, res) => {
    const market = posts.filter(data => data.category === 2);
    res.status(200).json(market);
}