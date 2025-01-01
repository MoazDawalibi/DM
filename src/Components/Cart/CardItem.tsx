import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Card, Skeleton, Button, Tooltip, Popconfirm } from "antd";
import useLoadingState from "../../Hooks/useLoadingState";
import { TProduct } from "../../types/Cart";
import { FaRegTrashAlt, FaTruck, FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MdOutlineVerified } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import CustomImage from "../../ui/CustomImage";
import { Product } from "../../types/item";
import { useCartState } from "../../state/CartState";
import { languageObject } from "../../utils/languageObject";
import { Currency } from "../../Layout/app/Const";

interface CartItemProps {
  data: Product;
}

const CardItem: React.FC<CartItemProps> = ({ data }) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const { t } = useTranslation();
  const { setCart, deleteFromCart, removeFromCart } = useCartState();

  const addToCart = () => {
    setCart(data);
  };

  const DeleteFromCart = () => {
    deleteFromCart(data?.id);
  };
  const RemoveFromCart = () => {
    removeFromCart(data?.id);
  };

  const price = (data?.quantity ?? 1) * data?.price;
  
  return (
    <Skeleton
      key={data?.id}
      loading={loading}
      active
      avatar
      style={{ width: "100%", marginTop: 22 }}
    >
      <Card
        className="CardItem"
        style={{ width: "100%", marginTop: 16 }}
        loading={loading}
      >
        <span className="Card_Img">
          <CustomImage alt="" src={data?.main_photo} />
        </span>

        <span className="Card_Info">
          <h5>{languageObject(data?.name)}</h5>
          <h6>
            <FaTruck /> {t("Free Delivery")}
          </h6>
        

          <div className="card_price">
            {/* <p>
              {price} {Currency}{" "}
            </p> */}
              <h6>
            <MdOutlineVerified /> {t("Guaranteed")}
          </h6>

            <div className="count_section">
              <FaRegTrashAlt
                onClick={() => {
                  RemoveFromCart();
                }}
                className="trashIcon"
              />
              <div className="card_counter">
                <span
                  onClick={() => {
                    DeleteFromCart();
                  }}
                >
                  <FiMinus />
                </span>
                <span className="Counter">{data?.quantity}</span>
                <span
                  onClick={() => {
                    addToCart();
                  }}
                >
                  <FaPlus />{" "}
                </span>
              </div>
            </div>
          </div>
        </span>
      </Card>
    </Skeleton>
  );
};

export default CardItem;
