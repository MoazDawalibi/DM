import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
  REGISTER: `auth/register`,
  LOGIN: `auth/login`,
  GUEST: `guest`,
  VERIFY: `auth/verify`,
  PASSWORD:'auth/change_password',
  UPDATE_PASSWORD: `user/changeAdminPassword`,


};
const KEY = "auth";

export const useRegister = () => useAddMutation(KEY, API.REGISTER);
export const useLogin = () => useAddMutation(KEY, API.LOGIN);
export const useGuest = (params?: any) => useAddMutation(KEY, API.GUEST);

export const useVerify = () => useAddMutation(KEY, API.VERIFY);

export const useChangePassword = () => useAddMutation(KEY, API.UPDATE_PASSWORD);


