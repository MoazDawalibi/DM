import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `product`,
};
const KEY = "product";

export const useGetProduct = (params?: any) =>
  useGetQuery(KEY, API.GET, params);



const API2 = {
  GETSimilar: `product`,
};
const KEY2 = "product_similar";

export const useGetProductSimilar = (params?: any) =>
  useGetQuery(KEY2, API2.GETSimilar, params);
