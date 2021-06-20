import Post from "../models/postModel.js";

const addPost = async (req, res) => {
  const { title, des } = req.body;

  const post = new Post({
    title,
    des,
  });
  post
    .save()
    .then((result) => {
      return res.status(201).json({ result });
    })
    .catch((e) => {
      console.log(e);
    });
};

export { addPost };
