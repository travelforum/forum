import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Chat from "./components/Chat";
import About from "./components/About";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import PostView from "./components/PostView";
import Login from "./components/Login";
import Logout from "./components/Logout.jsx";
export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        p={4}
        color="#eee"
        backgroundImage="/images/travel.jpg"
        backgroundSize="cover"
        minH="100dvh"
      >
        <Nav />
        <Box mt={4} bg="#0008" position="relative">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/post/:id" element={<PostView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
