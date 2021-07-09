import Post from "../models/postModel.js";

const addPost = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);

  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/" + req.files[i].filename);
  }

  const post = new Post({
    title,
    description,
    imgCollection: reqFiles,
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

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};
export { addPost, getPosts };
