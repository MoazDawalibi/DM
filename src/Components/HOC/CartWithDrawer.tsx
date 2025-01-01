import React, { useState, ReactNode, useEffect } from "react";
import type { DrawerProps } from "antd";
import { Badge, Button, Drawer, Space } from "antd";
import CardItem from "../Cart/CardItem";
import { BsArrowLeft, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCartState } from "../../state/CartState";
import { Currency } from "../../Layout/app/Const";
import useAuthState from "../../state/AuthState";
import { LocalStorageEnum } from "../../api/utils/LocalStorage";
import { useAddOrder } from "../../api/order";
import { toast } from "react-toastify";
import { BiBasket } from "react-icons/bi";

const CartWithDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const { t } = useTranslation();
  const { Cart, calculateTotalPrice, calculateTotalQuantity, removeCart } =
    useCartState();
  const { user ,isAuthenticated} = useAuthState();
  const { mutate, isLoading, isSuccess } = useAddOrder();
  const products = Cart?.map((item: any) => ({
    quantity: item?.quantity,
    id: item?.id,
  }));

  const addOrder = () => {
     if (!isAuthenticated) {
      toast.error("sorry you need to be authenticated");
      return;
    }
    mutate({
      email: user?.email,
      products: products,
      form: ["adding orders"],
    });
  };

  useEffect(() => {
    if (isSuccess) {

      removeCart();
      toast.success("order added success");
      setOpen(false);
    }
  }, [isSuccess]);

  return (
    <>
      <Space>
        <Badge className="Badge_Button" count={calculateTotalQuantity()}>
          <div onClick={() => setOpen(true)} className="icon_navbar">
            <BiBasket />
          </div>
        </Badge>
      </Space>

      <Drawer
        title={""}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        width={450}
        style={{maxHeight:"60%", minHeight:"500px"}}
      >
        <div className="cart_first_section">
          <span>{t("Cart")}</span>
          <span onClick={() => setOpen(false)}>
            <BsArrowLeft /> {t("Back To Shopping")}
          </span>
        </div>

        <div className="Drawer_Body">
          <div className="Card_Items">
            {Cart?.map((item: any, index: number) => (
              <CardItem key={index} data={item} />
            ))}
          </div>
          

          {Cart?.length > 0 ? (
            <div className="ViewCart_Button">
              <p>
                {t("Grand Total")}
                <br />
                {/* <span>
                  {" "}
                  {calculateTotalPrice()} {Currency}{" "}
                </span> */}
              </p>
              <Button
                className="cart_checkout_button"
                onClick={() => addOrder()}
                type="primary"
                block
              >
                {t("Checkout")}
              </Button>
            </div>
          ) : (
            <div className="EmptyCard">
              <img src="/Cart/empty_card.gif" alt="" />
              <p>{t('You have not placed any orders yet')}</p>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default CartWithDrawer;
