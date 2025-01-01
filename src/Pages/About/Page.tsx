import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import HeaderLink from "../../Components/Ui/HeaderLink";

const Page = () => {
  const [t] = useTranslation();
  return (
    <div className="About">
      <HeaderLink text='about'/>


      <div className="About_Laptop">
        <img src="/About/about_lap.png" alt="" />
      </div>

      <div className="Dm_Group">
        <div></div>
        <h1>{t("WE ARE DM GROUP")}</h1>
      </div>
      <div className="AboutUS">
        <img src="/About/AboutUS.png" alt="" />
        <div className="AboutUS_Info">
          <h1> {t("About Us")} </h1>
          <p>
            {t("We are DM company, which has been working for two decades. We are active in the United Arab Emirates in the field of stock laptops, computer parts, RAM, hard drives, etc. We are currently working with Europe, Africa and the Middle East.We provide you the best services with the shortest time and the highest quality")}
          </p>
        </div>
      </div>

      <div className="Media">
        <img src="/About/Media.png" alt="" />
        <div className="Media_info">
          <h1>{t("YOU CAN FIND US IN")} :</h1>
          <h6>{t("Telegram ID")} : @DM_GROUP</h6>
          <h6>{t("Email")} : DM_group@gmail.com</h6>
          <h6>{t("Instagram")} : DM_Group</h6>
          <h6>{t("LinkedIn")} : DM_Group</h6>
          <div>
            <h6>{t("Whatsapp")} :</h6>
            <div>
              <h6>+971 56 311 30 11</h6>
              <h6>+971 56 611 0 211</h6>
              <h6>+971 54 518 60 64</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="Hands">
        <img src="/About/about_hand.png" alt="" />
      </div>

      <img src="/About/line.svg" alt="" />
    </div>
  );
};

export default Page;
