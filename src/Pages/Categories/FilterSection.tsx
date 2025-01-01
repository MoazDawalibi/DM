import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import BrandFilter from "../../Components/Categories/BrandFilter";
import WearingStyleFilter from "../../Components/Categories/WearingStyle";
import ConnectivityFilter from "../../Components/Categories/Connectivity";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { useTranslation } from "react-i18next";


const FilterSection: React.FC = () => {

  const [t] = useTranslation()
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: t("Categories"),
    children: <BrandFilter />,
  },
  {
    key: "2",
    label: t("sub_categories"),
    children: <ConnectivityFilter />,
  },
  // {
  //   key: "3",
  //   label: "Wearing Style",
  //   children: <WearingStyleFilter />,
  // },
];


  return (
    <Collapse
      className="filter_collapse"
      expandIconPosition="end"
      expandIcon={SlArrowDown}
      defaultActiveKey={["1"]}
      ghost
      items={items}
    />
  );
}

export default FilterSection;
