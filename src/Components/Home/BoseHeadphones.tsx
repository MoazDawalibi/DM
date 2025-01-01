import { useTranslation } from "react-i18next";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const BoseHeadphones = () => {
  const {t} = useTranslation();
  return (
    <div className="BoseHeadphones">
      <img src="/Home/Bose_Headphones.png" alt="" />
      <div>
        <h6>{t("Bose Headphones")}</h6>
        <h1>{t("Smarter than your average headphones")}</h1>
        <Link to="/categories" >
          <button className="button">
            {t("Shop now")}
            <RiArrowRightUpFill />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BoseHeadphones;
