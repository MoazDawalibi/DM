import React from "react";
import { useTranslation } from "react-i18next";

const PremiumDesign = () => {
  const {t} = useTranslation();
  return (
    <div className="PremiumDesign">
      <h1>{t("Premium Design")}</h1>
      <p>
        {t("When you want to take your music anywhere, you need headphones built to keep up. With impact-resistant materials, glass-filled nylon, and corrosion-resistant stainless steel, they’re engineered to survive life on the go")}.
      </p>
      <img src="/Home/HeadPhone.png" alt="" />
    </div>
  );
};

export default PremiumDesign;
