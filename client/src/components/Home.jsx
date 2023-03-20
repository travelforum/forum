import { Box, Center, Heading, Link, Text, VStack } from "@chakra-ui/react";
import NewPost from "./NewPost";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Post({ post }) {
  const { title, content } = post;

  const authorName = post.user.name;

  return (
    <Box _hover={{ textDecoration: "none", textColor: "#99cfe0" }}>
      <Heading>{title}</Heading>
      <Text fontStyle="italic">Por {authorName}</Text>
      <Text>{content}</Text>
    </Box>
  );
}

async function getPosts() {
  const baseURL = "http://localhost:4000";
  const url = "/api/post";

  try {
    const response = await fetch(baseURL + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts();
      setPosts(posts);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  if (isLoading)
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );

  return (
    <Box>
      <VStack
        overflow="initial"
        alignItems="flex-start"
        spacing={4}
        p={4}
        pt={0}
      >
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post._id}`}>
            <Post post={post} />
          </Link>
        ))}
      </VStack>
      <Box position="fixed" bottom={0} right={4}>
        <NewPost />
      </Box>
    </Box>
  );
}
