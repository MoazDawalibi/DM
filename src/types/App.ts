import { ReactElement, LazyExoticComponent, ReactNode } from "react";

export type TRoute = {
  path: string;
  header: string;
  element: ReactElement | LazyExoticComponent<any>;
  withLayout?: boolean;
};

export type Tchildren = {
  children: ReactNode;
};

export type THeaderLink = {
  text: string;
  isMulti?:boolean,
  extraText?:string,
  extraLink?:string,
};