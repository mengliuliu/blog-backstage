import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./view/home";
import Content from "./view/content";
import styled from "styled-components";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      {/* <Home></Home> */}
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
