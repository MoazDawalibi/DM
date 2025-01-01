import React from 'react'
import { useTranslation } from 'react-i18next'

const Empty = () => {
    const [t] = useTranslation()
  return (
    <div className='Empty'>
        <img src="/icon/notfound_search.png" alt="" />
        <h1>{t("There are no suitable products")}</h1>
        <p>
            {t("Please try using other keywords to find the product name")}
        </p>
    </div>
  )
}

export default Empty