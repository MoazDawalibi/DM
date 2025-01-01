import { useTranslation } from 'react-i18next';
import { languageObject } from '../../utils/languageObject';

const ProductAdditionalInfo = (data:any) => {
  
  const ProductAdditionalInfo = data?.data;
  const { t } = useTranslation();
  const infoEntries = ProductAdditionalInfo?.info ? Object.entries(ProductAdditionalInfo.info) : [];
    
  return (
    <div className='product_additional_info'>
      <h4>{t("Additional Info")}</h4>
      {infoEntries.length > 0 ? (
        infoEntries.map(([key, value]: [any, any]) => (
          <span key={key}>
            <h6>{languageObject(key)}</h6>
            <h5>{languageObject(value)}</h5>
          </span>
        ))
      ) : (
        <p>{t("Product info is empty")}</p>
      )}
    </div>
  );
};

export default ProductAdditionalInfo;
