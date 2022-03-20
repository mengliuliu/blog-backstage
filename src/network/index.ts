import request from "../utils/request";
export default {
  login(params: any) {
    return request.post("/api/auth/login", params);
  },
  getArticleList(params: any) {
    return request.post("/api/articles", params);
  },
  getArticleDetail(params: any) {
    return request.get("/api/articles/" + params.id);
  },
  createArticle(params: any) {
    return request.post("/api/createArticle", params);
  },
  deleteArticle(params: any) {
    return request.post("/api/deleteArticle", params);
  },
  updateArticle(params: any) {
    return request.post("/api/updateArticle", params);
  },
};
