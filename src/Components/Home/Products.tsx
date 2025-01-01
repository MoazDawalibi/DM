import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductSwiper from "./ProductSwiper";
import { useGetBaseProduct } from "../../api/baseProduct";

const Products = () => {
  const {t} = useTranslation();
  
  const navigate = useNavigate();
  const handelSeeAll = () => {
    navigate(`/categories?type=new_product`);
    };

    const { data,isLoading } = useGetBaseProduct({
      lastProducts:"asc"
    });

    
  return (
    <div className="Products">
      <header>
        <h1>{t("New Products")}</h1>
        <h5 className="pointer" onClick={handelSeeAll}> {t("View all")} </h5>
      </header>
      <main className="ProductCards">
      <ProductSwiper data={data} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Products;
