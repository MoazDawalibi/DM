import { TProduct } from "../types/Cart";

export const Product = {
  id: 1,
  name: "Classic Rolex Watch",
  img: "../Cart/CartProduct.png",
  off: 15,
  rate: 4.5,
  price: 200,
  old_price: 250,
  brand: "karim",
  description:
    "Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",
  type: "Neck Sweater",
  count: 1,
};

export const Cartdata: TProduct[] = [Product, Product, Product];
