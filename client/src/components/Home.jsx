import { Box, Center, Heading, Link, Text, VStack } from "@chakra-ui/react";
import NewPost from "./NewPost";
import { Spinner } from "@chakra-ui/react";
import { useFetch } from "usehooks-ts";

function Post({ title, body }) {
  return (
    <Box pt={4} _hover={{ textDecoration: "none", textColor: "#99cfe0" }}>
      <Heading>{title}</Heading>
      <Text>{body}</Text>
    </Box>
  );
}
export default function Home() {
  const baseURL = "http://localhost:4000";
  const url = "/api/post";
  const { data: posts, error } = useFetch(baseURL + url);

  if (!posts)
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );

  return (
    <Box>
      <VStack overflow="initial" px={4}>
        {posts &&
          posts.map(({ id, title, content }) => (
            <Link key={id} href={`/post/${id}`}>
              <Post title={title} body={content} />
            </Link>
          ))}
      </VStack>
      <Box position="fixed" bottom={0} right={4}>
        <NewPost />
      </Box>
    </Box>
  );
}
