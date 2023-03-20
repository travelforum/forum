import { Avatar, Center, HStack, Link, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function MyLink({ to, children }) {
  const isCurrentPage = window.location.pathname === to;
  return (
    <Center
      p={6}
      bg="#0008"
      w="100%"
      textTransform="uppercase"
      textDecoration={isCurrentPage ? "underline" : "none"}
    >
      <Link href={to}>{children}</Link>
    </Center>
  );
}

export default function Nav() {
  const [user, setUser] = useLocalStorage("user", null);
  const isAuthenticated = !!user;

  const avatarSrc =
    isAuthenticated &&
    `https://api.dicebear.com/5.x/fun-emoji/svg?seed=${user.email}`;

  return (
    <HStack>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/chat">Chat</MyLink>
      <MyLink to="/about">Quem Somos</MyLink>
      {!isAuthenticated ? (
        <MyLink to="/login">Login</MyLink>
      ) : (
        <Link href={"/logout"} textTransform="uppercase" bg="#0008" p={5}>
          <HStack p={0}>
            <Text>Logout</Text>
            <Avatar size="sm" name={user.name} src={avatarSrc} />
          </HStack>
        </Link>
      )}
    </HStack>
  );
}
