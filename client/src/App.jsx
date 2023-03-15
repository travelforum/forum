import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Chat from "./components/Chat";
import About from "./components/About";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box backgroundImage="travel.jpg" backgroundSize="cover" h="100dvh">
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}
