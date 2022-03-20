import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./view/home";
import Content from "./view/content";
import ArticleList from '@src/view/content/articleManage/articleList'
import ArticleCreate from '@src/view/content/articleManage/articleCreate'
import ArticleDetail from '@src/view/content/articleManage/articleDetail'
import styled from "styled-components";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route key="home" path="/home" element={<Home />} />
        <Route key="content" path="/content" element={<Content />} >
          <Route key="articleList" path="/content/articleManage/articleList" element={<ArticleList />} />
          <Route key="articleDetail" path="/content/articleManage/articleDetail" element={<ArticleDetail />} />
          <Route key="articleCreate" path="/content/articleManage/articleCreate" element={<ArticleCreate />} />
        </Route >
        <Route
          path="*"
          element={<Navigate to="/home" />}
        />
      </Routes>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
