import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { getPosts } from "../data";
import NewPost from "./NewPost";

const posts = getPosts();

function Post({ title, body }) {
  return (
    <Box pt={4} _hover={{ textDecoration: "none", textColor: "#99cfe0" }}>
      <Heading>{title}</Heading>
      <Text>{body}</Text>
    </Box>
  );
}
export default function Home() {
  return (
    <>
      <VStack overflow="initial" px={4}>
        {posts.map(({ id, title, body }) => (
          <Link key={id} href={`/post/${id}`}>
            <Post title={title} body={body} />
          </Link>
        ))}
      </VStack>
      <Box position="fixed" bottom={0} right={4}>
        <NewPost />
      </Box>
    </>
  );
}
