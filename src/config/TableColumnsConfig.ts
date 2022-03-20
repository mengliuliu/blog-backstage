import {
  renderTime,
  renderDate,
  renderAmountInCent,
  renderTooltip,
  renderDate_,
} from "./TableColumnsRender";

const pageColumns: {
  [str: string]: { [str: string]: any; [index: number]: string };
} = {
  // 文章列表
  articleList: [
    "title",
    "content",
    "createTime",
    "like_count",
    "view_count",
    "operation",
    "is_delete"
  ],
};

const columnsDetail: { [str: string]: { [index: string]: any } } = {
  title: {
    dataIndex: "title",
    title: "标题",
    ellipsis: {
      showTitle: false,
    },
    render: renderTooltip,
  },
  content: {
    dataIndex: "content",
    title: "内容",
    ellipsis: {
      showTitle: false,
    },
    render: renderTooltip,
  },
  createTime: {
    dataIndex: "createTime",
    title: "创建时间",
    ellipsis: {
      showTitle: false,
    },
    render: renderTime,
  },
  like_count: { dataIndex: "like_count", title: "点赞数" },
  view_count: {
    dataIndex: "view_count",
    title: "浏览数",
    render: renderTooltip,
  },
  is_delete: {
    dataIndex: "is_delete",
    title: "是否已删除",
    render: renderTooltip,
  },
};

export const getColumnsByPageName = (
  pageName: string,
  columns?: { [name: string]: any }
) => {
  const arr = pageColumns[pageName];
  if (!arr) return [];
  const result: any = [];
  arr.forEach((item: string) => {
    if (columns && columns[item])
      result.push(Object.assign({}, columnsDetail[item], columns[item]));
    else if (columnsDetail[item]) result.push(columnsDetail[item]);
  });
  return result;
};
