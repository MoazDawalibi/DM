import React from "react";
import { useTranslation } from "react-i18next";

const PerfectSound = () => {
  const {t} = useTranslation();
  return (
    <div className="PerfectSound">
      <div>
        <h1>{t("Perfect sound immersive world")}</h1>
        <p>
          {t("QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free")}.
        </p>
      </div>
      <img src="/Home/PerfectSound.png" alt="" />
    </div>
  );
};

export default PerfectSound;
