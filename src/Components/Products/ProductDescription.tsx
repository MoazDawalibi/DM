import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDescription = ({data}:any) => {
    const {t} = useTranslation();
  return (
    <div className='product_description'>
        <h4>{t("Description")}</h4>
        <p>{data?.description}</p>
    </div>
  )
}

export default ProductDescription