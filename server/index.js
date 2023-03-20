const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {
  mongoCreatePost,
  mongoGetPosts,
  mongoGetPostById,
} = require("./forumCrud");
dotenv.config();

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// create post in the forum
app.post("/api/post", (req, res) => {
  const { title, content, image, user } = req.body;
  const newPost = {
    title,
    content,
    user,
  };

  if (image) {
    newPost.image = image;
  }

  mongoCreatePost(newPost);

  res.json({
    message: "Post created",
    post: newPost,
  });
});

app.get("/api/post", async (req, res) => {
  const posts = await mongoGetPosts();
  res.json(posts);
});

app.get("/api/post/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await mongoGetPostById(postId);
  res.json(post);
});
