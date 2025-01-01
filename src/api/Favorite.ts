import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `favorite/me`,
  ADD: `favorite`,
  DELETE: `favorite`,
};
const KEY = "favorite/me";

export const useGetFavorite = (params?: any) =>
  useGetQuery(KEY, API.GET, params);
export const useAddFavorite = () => useAddMutation(KEY, API.ADD);
export const useDeleteFavorite = () => useDeleteMutation(KEY, API.ADD);
