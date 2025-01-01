import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `category`,
};
const KEY = "categories";

export const useGetCategories = (params?: any) =>
  useGetQuery(KEY, API.GET, params);
