import { Box, Heading } from "@chakra-ui/react";
import UserForm from "./UserForm";

export default function UserInfo() {
  return (
    <Box p={4} mb={10} ml="auto">
      <Heading>Login</Heading>
      <UserForm />
    </Box>
  );
}
