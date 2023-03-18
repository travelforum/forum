const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

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
  const { title, content } = req.body;
  const newPost = {
    id: uuidv4(),
    title,
    content,
  };
  posts.push(newPost);
  res.json(posts);
});
