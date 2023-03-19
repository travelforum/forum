import { IconButton } from "@chakra-ui/react";

export default function PlusButton({ onClick }) {
  return (
    <IconButton
      m={30}
      rounded={"full"}
      h={50}
      w={50}
      p={8}
      colorScheme="teal"
      textTransform="uppercase"
      fontSize="5xl"
      onClick={onClick}
      icon={<span>+</span>}
    />
  );
}
