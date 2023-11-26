import moment from "moment";
export const formatDate = (value: any, format: string = "MMM DD YYYY") => {
  return moment(value).format(format);
};
export const formatDateTime = (value: any) => {
  const formatString = "MMM DD YYYY HH:mm";
  return moment(value).utcOffset("+0700").format(formatString);
};
export const defaultFormatDate = (value: any) => {
  return moment(value).format("MMM DD, YYYY");
};
