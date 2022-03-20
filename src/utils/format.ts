import { numberToThousands, stampToTime } from "./timeFilter";

//数字格式化
const formatNumber = {
  //分转元
  centToYuan(text: number | string) {},
  //元转分
  yuanToCent(text: number | string) {},
  //添加 '￥' 字符
  addUnit(text: number | string) {
    return (text = "￥" + numberToThousands(Number(text).toFixed(2)));
  },
  //添加 '￥' 字符
  withoutUnit(text: number | string) {
    return (text = "￥" + numberToThousands(Number(text).toFixed(2)));
  },
  //转千进制,每三个数字增加一个 ','
  addThousandsSign() {},
  //金融转大写中文字
  numberToChinese() {},
  //向下截取两位小数，不做四舍五入。如，2.789 => 2.78 ws：位数
  toFix2(value: any, ws: number = 2) {
    let result = String(value);
    if (result.indexOf(".") != -1) {
      result = result.slice(0, result.indexOf(".") + ws + 1);
    }
    return Number(result);
  },
  //数字百分比化
  percent(num: number) {
    return num / 100 + "%";
  },
};

//日期格式化
const formatDate = {
  //精确时间
  keepMinutesAndSeconds(timeStamp: string) {
    return stampToTime(timeStamp, 4);
  },
  //只保留到日月
  keeMonthAndDay(timeStamp: string) {
    return stampToTime(timeStamp, 8);
  },
  //只保留到日月中间-连接
  keeMonthAndDay_(timeStamp: string) {
    return stampToTime(timeStamp, 6);
  },
  //只保留到日月
  keeMonthAndDayZH(timeStamp: string) {
    return stampToTime(timeStamp, 10);
  },
};

//格式化table数据
const formatTableData = {
  //增加key值
  addKey(dataSource: any, str?: string) {
    dataSource.forEach((item: any, index: number) => {
      if (str && item[str]) item.key = item[str];
      else if (item.uuid) item.key = item.uuid;
      else item.key = index;
    });
    return dataSource;
  },
};

//处理win/mac 文件路径区别
const formatFilePath = (path: string) => {
  const isWindows = true;
  path = "file://" + path + "##scrollbars=0&toolbar=0&statusbar=0&view=FitH";
  if (isWindows) path = path.replace("/", "\\");
  return path;
};

const formatPdfFileUrl = (src: string) => {
  return src + "##scrollbars=0&toolbar=0&statusbar=0&view=FitH";
};

//在请求url前添加baseurl
const formatUrl = (url: string) => {
  const env = process.env.NODE_ENV;
  if (env === "development") var baseUrl = "/api";
  // else var baseUrl: string = window.config.serverAddress
  return baseUrl + url;
};

export {
  formatNumber,
  formatDate,
  formatTableData,
  formatFilePath,
  formatPdfFileUrl,
  formatUrl,
};
