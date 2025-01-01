import React from "react";
import { useTranslation } from "react-i18next";
import { FaqsInfo } from "../../data/FaqsInfo";
import CollapseGroup from "./CollapseGroup";
import { IoIosArrowForward } from "react-icons/io";
import HeaderLink from "../../Components/Ui/HeaderLink";

const Faqs = () => {
  const { t } = useTranslation();

  return (
    <div className="faqs_container">
      <HeaderLink text='FAQS'/>

      <div className="faqs_image_section">
        <img src="/Faqs/FaqsImage.png" alt="faqs_image" />
        <h6>{t("Frequently Asked Questions")}</h6>
      </div>

      <div className="faqs_body">
        <div className="left">
          <h1>{t("Table of Contents")}</h1>
          {FaqsInfo.map((info) => (
            <p>{t(info.text)}</p>
          ))}
        </div>

        <div className="right">
          <CollapseGroup />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
