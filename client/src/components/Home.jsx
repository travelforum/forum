import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { getPosts } from "../data";

const posts = getPosts();

function Post({ title, body }) {
  return (
    <Box pt={4}>
      <Heading>{title}</Heading>
      <Text>{body}</Text>
    </Box>
  );
}
export default function Home() {
  return (
    <VStack overflow="initial" px={4}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </VStack>
  );
}
