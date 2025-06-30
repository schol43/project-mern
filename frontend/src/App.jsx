 import {Box, Button } from "@chakra-ui/react"
 import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";


 function App() {
   
  return (
    <Box minH={"100vh"}>
        
        <Navbar />
<Routes>

          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/create" element={<h1>CreatePage</h1>} />
</Routes>

    </Box>
  );
}

export default App;
