import React from 'react'
import { useTranslation } from 'react-i18next'

const EmptyOrder = () => {
    const {t} = useTranslation();
  return (
    <div className='EmptyOrder'>
        <img src='/Layout/EmptyOrder.png' alt='EmptyOrder'/>
        <p>{t("You have not placed any orders yet")}</p> 
    </div>
  )
}

export default EmptyOrder