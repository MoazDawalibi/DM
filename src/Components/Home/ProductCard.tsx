import React, { useEffect } from "react";
import { FaHeart, FaStar, FaCartPlus } from "react-icons/fa";
import { Currency } from "../../Layout/app/Const";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CustomImage from "../../ui/CustomImage";
import { languageObject } from "../../utils/languageObject";
import { Product } from "../../types/item";
import { useAddFavorite, useDeleteFavorite } from "../../api/Favorite";
import useAuthState from "../../state/AuthState";
import { toast } from "react-toastify";
import { useCartState } from "../../state/CartState";
import { useQueryClient } from "react-query";

const ProductCard = ({ item }: { item: Product }) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState();

  const handle_click = (id: number) => {
    navigate(`/product/${id}`);
  };

  const { mutate: addToFavorite, isSuccess: Add } = useAddFavorite();
  const { mutate: deleteToFavorite, isSuccess: Delete } = useDeleteFavorite();
  const price = Number(item?.price);
  const discountAmount = 10;
  const oldPrice = (Number(price) / 0.9).toFixed(2);

  const min = 4.5;
  const max = 5;
  const randomRate = (Math.random() * (max - min) + min)?.toFixed(1);

  const { Cart, setCart } = useCartState();
  const queryClient = useQueryClient();

  const handleChangeFavorite = (item: Product) => {
    if (!isAuthenticated) {
      toast.error("Sorry, you need to be authenticated");
      return;
    }

    if (item?.favorite) {
      deleteToFavorite({ id: item?.id });
    } else {
      addToFavorite({ id: item?.id });
    }
    queryClient.invalidateQueries("mainProduct");
  };

  useEffect(() => {
    if (Add) {
      toast.success("Added successfully");
      queryClient.invalidateQueries("mainProduct");
    }
  }, [Add]);

  useEffect(() => {
    if (Delete) {
      toast.success("Removed successfully");
      queryClient.invalidateQueries("mainProduct");
    }
  }, [Delete]);

  const handleAddToCart = (item: Product) => {
    if (!isAuthenticated) {
      toast.error("Sorry, you need to be authenticated");
      return;
    }
    setCart(item);
    toast.success(`${languageObject(item?.name)} added to cart`);
  };
  const Desc :any  = item?.description
  const words = Desc.split(' ');
  const firstThreeWord = words.slice(0, 2).join(' ');
  const result = words.length > 2 ? firstThreeWord + '...' : firstThreeWord;
  return (
    <div className="ProductCard">
      <CustomImage src={item?.main_photo} onClick={() => handle_click(item?.base_product_id)} />
      <h4 className="truncate-text">{languageObject(item?.name)}</h4>
      <h5 className="desc">{t("Description")}: {result}</h5>
      <article>
        <button className="button" onClick={() => handleAddToCart(item)}>
          <FaCartPlus />
          {t("add to cart")}
        </button>
        <FaHeart
          onClick={() => handleChangeFavorite(item)}
          className={item?.favorite ? "" : "not_favorite"}
        />
      </article>
    </div>
  );
};

export default ProductCard;

