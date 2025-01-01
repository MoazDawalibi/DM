import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `product?oneByBaseProduct=true`,
  SHOW: `baseProduct`,

};
const KEY = "mainProduct";
const SHOW = "baseProduct";

export const useGetBaseProduct = (params?: any) =>
  useGetQuery(KEY, API.GET, params);


export const useGetSingleBaseProduct = (params?: any) =>
  useGetQuery(SHOW, API.SHOW, params);
