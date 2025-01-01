import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `order`,
  ADD: `order`,
};
const KEY = "order";

export const useGetOrder = (params?: any) => useGetQuery(KEY, API.GET, params);
export const useAddOrder = () => useAddMutation(KEY, API.ADD);
export const useDeleteOrder = () => useDeleteMutation(KEY, API.ADD);
