import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [t] = useTranslation();
  const Navigate = useNavigate();
  const handleNavigate = () =>{
    Navigate('/categories');
  }
  return (
    <div className="HeroSection">
      <div>
        <h1>{t("Quite Comfort 35 wireless headphones II")}</h1>

        <div>
          {/* <h3>  $229.50 </h3> */}
          <button className="button" onClick={handleNavigate}>{t("Buy Now")}</button>
        </div>
      </div>
      <span>
        <img src="/Home/p1.png" alt="" />
      </span>
    </div>
  );
};

export default HeroSection;
