import { AppKeyEnum } from "../enums/AppKey";
import { AppRoutes } from "../Routes";

export const usegetTitleFromRoute = (path: any) => {
  if (AppRoutes[path]) {
    return `${AppRoutes[path]}`;
  }
};
