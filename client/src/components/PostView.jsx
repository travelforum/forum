import { Box, Center, Heading, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPost from "../api/getPost";

export default function PostView() {
  const id = useParams().id;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("post", post);

  useEffect(() => {
    async function fetchPost() {
      const post = await getPost(id);
      setPost(post);
      setIsLoading(false);
    }
    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  const { title, content, image } = post;
  return (
    <Box>
      <Heading>{title}</Heading>
      {image && (
        <Box>
          <Image src={image} />
        </Box>
      )}
      <Box>{content}</Box>
    </Box>
  );
}
