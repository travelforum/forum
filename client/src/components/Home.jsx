import { Box, Heading, Text } from "@chakra-ui/react";
import { getPosts } from "../data";

const posts = getPosts();
export default function Home() {
  return (
    <Box>
      {posts.map((post) => (
        <Box>
          <Heading key={post.id}>{post.title}</Heading>
          <Text>{post.body}</Text>
        </Box>
      ))}
    </Box>
  );
}
