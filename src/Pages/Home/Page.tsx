import React from "react";
import HeroSection from "../../Components/Home/HeroSection";
import HomeSlider from "../../Components/Home/CategoriesSlider";
import ProductsOnSale from "../../Components/Home/ProductsOnSale";
import Products from "../../Components/Home/Products";
import PremiumDesign from "../../Components/Home/PremiumDesign";
import BoseHeadphones from "../../Components/Home/BoseHeadphones";
import NoiseCancellation from "../../Components/Home/NoiseCancellation";
import BatteryLife from "../../Components/Home/BatteryLife";
import PerfectSound from "../../Components/Home/PerfectSound";
import BestSale from "../../Components/Home/BestSale";
import Categories from "../../Components/Home/Categories";

const Page = () => {
  return (
    <div className="home_page">
      <HeroSection />
      <Categories />
      {/* <ProductsOnSale/> */}
      <Products />
      <PremiumDesign />
      <BoseHeadphones />
      <NoiseCancellation />
      <PerfectSound />
      <BestSale />
      <BatteryLife />
    </div>
  );
};

export default Page;
