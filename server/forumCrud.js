const { MongoClient } = require("mongodb");

async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}
async function mongoCreatePost(data) {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("forum");
    const collection = db.collection("posts");

    console.log("CREATE post");
    await createPostDocument(collection, data);
  } finally {
    await mongoClient.close();
  }
}

async function createPostDocument(collection, postDocument) {
  // const postDocument = {
  //   title: "Hello World",
  //   content: "This is my first post!",
  //   image: "https://i.imgur.com/1J2wQ9q.jpg",
  //   user: {
  //     name: "John Smith",
  //     email: "johnsmith@example.com",
  //     photo: "https://api.dicebear.com/5.x/fun-emoji/svg?seed=John",
  //   },
  // };

  await collection.insertOne(postDocument);
}

module.exports = {
  mongoCreatePost,
};
