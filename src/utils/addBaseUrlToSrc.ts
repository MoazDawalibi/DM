import { ImageBaseURL } from "../api/utils/config";

export const addBaseUrlToSrc = (src: string) => {
  return ImageBaseURL + src?.replace("public", "/storage");
};
