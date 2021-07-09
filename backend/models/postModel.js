import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imgCollection: {
    type: Array,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
