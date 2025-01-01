import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setProductData } from "./Slice/productSlice";

import { useEffect } from "react";
import { setCartData } from "./Slice/cartSlice";
import { Cartdata } from "../data/CartData";

export const useProductData = () => {
  const Product = useSelector((state: RootState) => state.Product.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductData([]));
  }, [dispatch]);
  return { Product, dispatch };
};

export const useCartData = () => {
  const DataCart = useSelector((state: RootState) => state.Cart.value);
  const count = useSelector((state: RootState) => state.Cart.count);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartData(Cartdata));
  }, [dispatch, DataCart, count]);

  return { DataCart, dispatch, count };
};
