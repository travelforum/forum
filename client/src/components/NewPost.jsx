import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import NewPostForm from "./NewPostForm";
import PlusButton from "./PlusButton";

export default function NewPost() {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen)
    return (
      <Box bgColor={"teal.600"} p={4} mb={10} rounded="5%" w={600}>
        <Heading>Novo Tópico</Heading>
        <NewPostForm />
      </Box>
    );
  return <PlusButton onClick={() => setIsOpen(true)} />;
}
