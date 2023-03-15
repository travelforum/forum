import { Center, HStack, Link } from "@chakra-ui/react";

function MyLink({ to, children }) {
  const isCurrentPage = window.location.pathname === to;
  return (
    <Center
      p={6}
      bg="#0008"
      w="100%"
      textTransform="uppercase"
      textDecoration={isCurrentPage ? "underline" : "none"}
      color="#eee"
    >
      <Link href={to}>{children}</Link>
    </Center>
  );
}

export default function Nav() {
  return (
    <HStack p={4}>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/chat">Chat</MyLink>
      <MyLink to="/about">Quem Somos</MyLink>
    </HStack>
  );
}
