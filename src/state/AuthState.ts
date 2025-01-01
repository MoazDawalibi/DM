import { create } from "zustand";
import { LocalStorageEnum } from "../api/utils/LocalStorage";

interface LoginResponse {
  token: string;
  user: any;
  token_node: string;
}

interface AuthStore {
  user: any | null | undefined;
  token: string | null | undefined;
  isAuthenticated: boolean;
  Guest: any | null | undefined;
  setGuest: (newGuest: any) => void;
  login: (userData: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthState = create<AuthStore>((set) => {
  const storedUser: any = localStorage.getItem(LocalStorageEnum.USER_KEY);
  const storedGuest: any = localStorage.getItem(LocalStorageEnum.GUEST_KEY);

  const storedToken = localStorage.getItem(LocalStorageEnum.TOKEN_KEY);

  const initialUser =
    storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;


  return {
    user: initialUser,
    isAuthenticated: !!storedToken,
    token: storedToken,
    Guest: storedGuest,
    setGuest: (Guest: string) => {
      localStorage.setItem(LocalStorageEnum.GUEST_KEY, Guest);
      set(() => ({
        Guest: Guest,
      }));
    },
    login: async (userData) => {
      localStorage.setItem(LocalStorageEnum.TOKEN_KEY, userData?.token);

      localStorage.setItem(
        LocalStorageEnum.USER_KEY,
        JSON.stringify(userData?.user),
      );

      set((state) => ({
        user: userData.user,
        isAuthenticated: true,
        token: userData.token,
      }));
    },
    logout: async () => {
      localStorage.clear()
      set((state) => ({ user: null, isAuthenticated: false, token: null ,Guest:null }));
    },
  };
});

export default useAuthState;
