import { ChakraProvider } from "@chakra-ui/react";
import { CSSReset } from "@chakra-ui/react";
export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      Hello, world!
    </ChakraProvider>
  );
}
