import { lazy } from "react";
import Auth from "./Pages/Auth/Page";
import Page from "./Pages/Home/Page";
import { TRoute } from "./types/App";
import Contact from "./Pages/Contact/Contact";
import Faqs from "./Pages/Faqs/Faqs";
import About from "./Pages/About/Page";
import Categories from "./Pages/Categories/Page";
import SettingPage from "./Pages/Setting/Page";
import Product from "./Pages/Product/Page";

const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"));

export const routes: TRoute[] = [
  { path: "*", header: "Error Page", element: <Page404 /> },
  { path: "/auth", header: "Sign In", element: <Auth /> },
  { path: "/", header: "Home Page", element: <Page />, withLayout: true },
  {
    path: "/contact",
    header: "Contact",
    element: <Contact />,
    withLayout: true,
  },
  { path: "/faq", header: "Faq", element: <Faqs />, withLayout: true },
  { path: "/about", header: "About", element: <About />, withLayout: true },
  {
    path: "/categories",
    header: "Categories",
    element: <Categories />,
    withLayout: true,
  },
  {
    path: "/settings",
    header: "Settings",
    element: <SettingPage />,
    withLayout: true,
  },

  {
    path: "/product/:product_id",
    header: "product",
    element: <Product />,
    withLayout: true,
  },
];

export const AppRoutes: Record<string, string> = Object.fromEntries(
  routes.map((route) => [route.path, route.header]),
);
