import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { Currency } from "../../Layout/app/Const";
import Similar from "./Similar";
import { useGetSingleBaseProduct } from "../../api/baseProduct";
import { Product } from "../../types/item";
import { useParams } from "react-router-dom";
import CustomImage from "../../ui/CustomImage";
import { Spin } from "antd";
import { languageObject } from "../../utils/languageObject";
import { jsonObjectToArray } from "../../utils/jsonObjectToArray";
import HeaderLink from "../../Components/Ui/HeaderLink";
import { BaseURL } from "../../api/utils/config";
import ProductTabs from "../../Components/Products/ProductsTabs";
import { IoHeartOutline } from "react-icons/io5";
import { useAddFavorite, useDeleteFavorite } from "../../api/Favorite";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
import { useCartState } from "../../state/CartState";
import useAuthState from "../../state/AuthState";
import ProductSlider from "../../Components/Products/ProductSlider";

const Page = () => {
  
  const [t] = useTranslation();
  const {product_id} = useParams()
  const { Cart, setCart } = useCartState();
  const { isAuthenticated } = useAuthState();
  const { mutate: addToFavorite, isSuccess: Add } = useAddFavorite();
  const { mutate: deleteToFavorite, isSuccess: Delete } = useDeleteFavorite();

  const {data,isLoading} = useGetSingleBaseProduct({
    show:product_id
  })
  const product = data?.data?.product as Product || {}
  
  
  const [MainImage, setMainImage] = useState(product?.main_photo);
  useEffect(() => {
    setMainImage(product?.main_photo)
  }, [product?.main_photo])
  
  const queryClient = useQueryClient();

  const handelChangeFavorite = (item: Product) => {
    if (!isAuthenticated) {
      toast.error("sorry you need to be authenticated");
      return;
    }
    if (item?.favorite) {
      
      deleteToFavorite({
        id: item?.id,
      });
    } else {
      addToFavorite({
        id: item?.id,
      });
    }
    queryClient.invalidateQueries('mainProduct');

  };
  useEffect(() => {
    if (Add) {
      toast.success("added to favorite successfully");
      queryClient.invalidateQueries("mainProduct");
    }
  }, [Add]);
  useEffect(() => {
    if (Delete) {
      toast.success("removed from favorite successfully");
      queryClient.invalidateQueries("mainProduct");
    }
  }, [Delete]);
  const handelAddToCart = (item: Product) => {
    if (!isAuthenticated) {

      toast.error("sorry you need to be authenticated");
      return;
    }
    setCart(item);


    toast.success(`${languageObject(item?.name)}` + " added to cart");
  };

      const info = jsonObjectToArray(product?.info)
    const handleChangeImage = (imagePath: string) => {
      setMainImage(imagePath);
    };
  if(isLoading){
    return <div className="loading_state"> <Spin/> </div> 
  }
  
  return (
    <div className="Product">
      <header>
        <HeaderLink text="Product" isMulti={true} extraText="Categories" extraLink={"categories"}/>
      </header>
      <main>
        <div className="Product_left">
          <span className="Product_left_container">
            <div className="fav_icon">
              <IoHeartOutline 
                onClick={() => handelChangeFavorite(product)}
                className={product?.favorite ? "" : "not_favorite"}
              />
              <FaCartPlus 
                onClick={() => handelAddToCart(product)}
              />
            </div>
            <CustomImage src={MainImage ?? product?.main_photo} alt="" />
            <div className="gallery_product">
            <ProductSlider data={product} onImageClick={handleChangeImage} />
            </div>
          </span>
         
        </div>
        <div className="Product_Right">
          <ProductTabs data={product}/>
        </div>
      </main>
      <Similar  category_id={product?.category?.id} />
    </div>
  );
};

export default Page;
