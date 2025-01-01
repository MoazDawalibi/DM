import React from "react";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="Footer">
      <div className="footer_first_section">
        <img src="/App/Logo.png" alt="" />
        <p>
          {t("DM is the one of the world’s largest online shops that providing over 1500 headphones for its costumers from over 80 countries")}
        </p>
        <div>
          <img src="/Layout/Footer/1.png" alt="" />
          <img src="/Layout/Footer/2.png" alt="" />
          <img src="/Layout/Footer/3.png" alt="" />
          <img src="/Layout/Footer/4.png" alt="" />
        </div>
      </div>
      <div>
        <h6>{t("info")}</h6>
        <div>
          <Link className="pointer" to={"/about"}><p>{t("About us")}</p></Link>
          <Link className="pointer" to={"/categories"}><p>{t("Headphones")}</p></Link>
          <Link className="pointer" to={"/categories"}><p>{t("Earphones")}</p></Link>
          <Link className="pointer" to={"/faqs"}><p>{t("FAQS")}</p></Link>
        </div>
      </div>
      <div>
        <h6> {t("Contact us")}</h6>
        <div>
          <p>
            <IoLocationSharp />
            123 Main Street, Anytown,USA
          </p>
          <p>
            <BsTelephoneOutboundFill />
            +1 (555) 123-4567
          </p>
          <p>
            <BiMessageRoundedCheck />
            DM Support@gmail.com
          </p>
        </div>
      </div>
      <div className="footer_last_section">
        <h6>{t("Sign up for News and updates")}</h6>
        <div>
          <Link to={'https://www.facebook.com/'}><FaFacebook /></Link>
          <Link to={'https://www.twitter.com/'}><FaTwitter /></Link>
          <Link to={'https://www.instagram.com/'}><FaInstagram /></Link>
          <Link to={'https://www.youtube.com/'}><FaYoutube /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
