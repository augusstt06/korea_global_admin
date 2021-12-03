import posts from  "../../../../posts.json";

export default (req, res) => {
    const study = posts.filter(data => data.category === 3);
    res.status(200).json(study);
}