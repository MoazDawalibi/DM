import { useTranslation } from "react-i18next";
import { useGetBaseProduct } from "../../api/baseProduct";
import ProductSwiper from "../../Components/Home/ProductSwiper";

const Similar = ({category_id}:any) => {
  const { data,isLoading } = useGetBaseProduct({
    category_id:[category_id]
  });
  const {t} = useTranslation();
  
  return (
    <div className="Products">
      <header>
        <h1>{t("Similar Products")}</h1>
      </header>
      <main className="ProductCards">
        <ProductSwiper data={data} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Similar;
