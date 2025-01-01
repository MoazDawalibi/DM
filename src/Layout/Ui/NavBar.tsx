import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart, BsSearch } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useHelpStateState } from "../../state/HelpState";
import Auth from "../../Pages/Auth/Page";
import { Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import ViewCart from "../../Components/Cart/Cart";
import { useCartState } from "../../state/CartState";
import ViewSearch from "../../Components/Utils/Search/Search";
import Translate from "../../Components/Utils/Translate";

const NavBar = () => {
  type item = { name: string; href: string };
  const { pathname } = useLocation();
  const [t] = useTranslation();

  const Links: item[] = [
    { name: t("Home"), href: "/" },
    { name: t("Categories"), href: "/categories" },
    { name: t("FAQS"), href: "/faq" },
    { name: t("about"), href: "/about" },
    { name: t("Contact"), href: "/contact" },
    { name: t("help"), href: "help" },
  ];

  const { setHelpModal } = useHelpStateState();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <Link to={'/'}><img src="/App/Logo.png" alt="Logo" /></Link>
      <div className="navbar_links">
        {Links?.map((item: item, index: number) => {
          if (item?.href === "help") {
            return (
              <div
                className="navbar_link"
                key={index}
                onClick={() => setHelpModal()}
              >
                {" "}
                {item?.name}{" "}
              </div>
            );
          }
          return (
            <Link
              className={`navbar_link ${pathname === item?.href && "active"}`}
              key={index}
              to={item?.href}
            >
              {item?.name}
            </Link>
          );
        })}
      </div>
      <span>
        <article>
          <div className='icon_navbar search_icon'><ViewSearch /></div>
          <div className='cart_container icon_navbar'><ViewCart /></div>
          <Translate />
          <Auth />
        </article>
        <div className="menu">
          <GiHamburgerMenu onClick={showDrawer} />
          <Drawer width={200} onClose={onClose} open={open} extra={<img src="/App/Logo.png" alt="Logo" width={40} />}>

            <div className="menu_navbar_links">
              {Links?.map((item: item, index: number) => {
                if (item?.href === "help") {
                  return (
                    <div
                      className="menu_navbar_link"
                      key={index}
                      onClick={() => {
                        setHelpModal();
                        onClose();
                      }}
                    >
                      {" "}
                      {item?.name}{" "}
                    </div>
                  );
                }
                return (
                  <Link
                    onClick={onClose}
                    className={`menu_navbar_link ${pathname === item?.href && "active"}`}
                    key={index}
                    to={item?.href}
                  >
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </Drawer>
        </div>
      </span>
    </div>
  );
};

export default NavBar;
