import { useParams } from "react-router-dom";
import request from "../utils/request";
export default {
  getArticleList() {
    return request.get("/api/articles");
  },
  getArticleDetail(params: any) {
    return request.get("/api/articles/" + params.id);
  },
};
