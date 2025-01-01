import React from 'react'
import { useTranslation } from 'react-i18next'
import { languageObject } from '../../utils/languageObject';

const ProductInfo = (data:any) => {

  const productInfo = data?.data
  const {t} = useTranslation();

  return (
    <div className='Product_info'>
      <h4>{t("Info")}</h4>
      <div>
        <span>
          <h6>{t("name")}</h6> <h5>{languageObject(productInfo?.name)}</h5>
        </span>
        <span>
          <h6>{t("Category")}</h6> <h5>{languageObject(productInfo?.category?.name)}</h5>
        </span>
        {/* <span>
          <h6>{t("Price")}</h6> <h5>{productInfo?.price}</h5>
        </span> */}
        <span>
          <h6>{t("Description")}</h6> <h5>{languageObject(productInfo?.description)}</h5>
        </span>
      </div>
    </div>
  )
}

export default ProductInfo