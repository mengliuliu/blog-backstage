import request from '../utils/request';
import { formatUrl } from '@src/utils/format';

export default {
  login(params: any) {
    return request.post(formatUrl('/auth/login'), params);
  },
  register(params: any) {
    return request.post(formatUrl('/auth/register'), params);
  },
  getArticleList(params: any) {
    return request.post(formatUrl('/articles'), params);
  },
  getArticleDetail(params: any) {
    return request.get(formatUrl('/articles/') + params.id);
  },
  createArticle(params: any) {
    return request.post(formatUrl('/createArticle'), params);
  },
  deleteArticle(params: any) {
    return request.post(formatUrl('/deleteArticle'), params);
  },
  updateArticle(params: any) {
    return request.post(formatUrl('/updateArticle'), params);
  },
};
