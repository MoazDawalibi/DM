import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: `setting`,
};

const KEY = "settings";

export const useUpdateSetting = (params?: any) =>
  useGetQuery(KEY, API.GET, params);
