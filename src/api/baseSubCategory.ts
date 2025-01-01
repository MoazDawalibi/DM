import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `baseSubCategory`,
};
const KEY = "baseSubCategory";

export const useGetBaseSubCategory = (params?: any) =>
  useGetQuery(KEY, API.GET, params);
