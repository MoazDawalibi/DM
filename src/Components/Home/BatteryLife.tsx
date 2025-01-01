import React from "react";
import { useTranslation } from "react-i18next";

const BatteryLife = () => {
  const {t} = useTranslation();
  return (
    <div className="BatteryLife">
      <div>
        <h1>{t("Up to 20 hours battery life")}</h1>
        <p>{t("Enjoy up to 20 hours of listening, enough time to pore through this entire playlist. So you can keep the music — or the quiet — going all day long. And when it finally runs down, a quick 15-minute charge gives you another 2.5 hours")}.
        </p>
      </div>
      <img src="/Home/BatteryLife.png" alt="" />
    </div>
  );
};

export default BatteryLife;
