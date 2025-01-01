import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
  ADD: `supportMessages`,
};
const KEY = "supportMessages";

export const useAddSupportMessage = () => useAddMutation(KEY, API.ADD);
